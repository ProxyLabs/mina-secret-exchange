import {
  isReady,
  shutdown,
  Field,
  Mina,
  PrivateKey,
  UInt64,
  Party,
  PublicKey,
  UInt32,
  Signature,
} from "snarkyjs";

import { SecretExchange } from "./contract.js";
import { QuadraticFunction } from "./quadratic-function.js";

export {
  deployContract,
  getEquationParameters,
  submitSolution,
  accounts,
  fetchAccountStates,
  AccountState,
  swapForMina,
  swapForToken,
};

await isReady;

// interfaces for account state, balance etc
interface SnappAccount {
  address: String;
  balance: String;
  balanceToken: String;
}
interface Account {
  address: String;
  balance: String;
  balanceToken: String;
}
interface AccountState {
  account1: Account;
  account2: Account;
  snapp: SnappAccount;
}

// setup
let quadraticFunction: QuadraticFunction;
let exchangeInstance: SecretExchange;

const Local = Mina.LocalBlockchain();
Mina.setActiveInstance(Local);
let account1 = Local.testAccounts[0].privateKey;
let account2 = Local.testAccounts[1].privateKey;
const accounts = [account1, account2];
let snappPrivkey = PrivateKey.random();
let snappAddress = snappPrivkey.toPublicKey();

/**
 * Deploys a contract with equation params a, b and c
 * @param a a
 * @param b b
 * @param c c
 */
async function deployContract(a: number, b: number, c: number) {
  console.log("deploying");
  await Mina.transaction(account1, async () => {
    const amount = UInt64.fromNumber(1000000000);
    const p = await Party.createSigned(account2);
    p.balance.subInPlace(amount);

    quadraticFunction = new QuadraticFunction(Field(a), Field(b), Field(c));
    exchangeInstance = new SecretExchange(
      snappAddress,
      quadraticFunction,
      amount,
      [account1.toPublicKey(), account2.toPublicKey()]
    );
  })
    .send()
    .wait()
    .catch((e) => {
      console.log(e);
    });
}

/**
 * Submits solution to the contract
 * @param x Solution to verify
 * @returns Returns a boolean wheter or not verification was sucessful
 */
async function submitSolution(x: number): Promise<boolean> {
  let result = true;
  await Mina.transaction(account1, async () => {
    await exchangeInstance.verifySolution(new Field(x), account1.toPublicKey());
  })
    .send()
    .wait()
    .then()
    .catch((e) => {
      console.log(e);
      result = false;
    });

  return result;
}

/**
 * Gets the equation parameters a,b and c
 * @returns Returns the equation parameters a,b and c
 */
async function getEquationParameters(): Promise<[number, number, number]> {
  let snappState = (await Mina.getAccount(snappAddress)).snapp.appState;
  return [
    parseInt(snappState[0].toString()),
    parseInt(snappState[1].toString()),
    parseInt(snappState[2].toString()),
  ];
}

/**
 * Swaps  MINA for a token
 * @param amount Amount to swap
 * @param x Solution to the equation
 * @param acc Account to trade with
 */
async function swapForMina(
  amount: number,
  x: number,
  acc: number
): Promise<boolean> {
  let account: PrivateKey;
  account = acc == 0 ? account1 : account2;
  const { nonce: snappNonce } = await Mina.getAccount(snappAddress);
  let result = true;
  await Mina.transaction(account, async () => {
    await exchangeInstance.swapForMina(
      UInt64.fromNumber(amount),
      new Field(x),
      Signature.create(account, snappNonce.toFields()),
      account.toPublicKey()
    );
    // claiming mina
    Party.createUnsigned(account.toPublicKey()).balance.addInPlace(
      UInt64.fromNumber(amount)
    );
  })
    .send()
    .wait()
    .catch((e) => {
      console.log(e);
      result = false;
    });

  return result;
}

/**
 * Swaps Token for MINA
 * @param amount Amount to swap
 * @param x Solution to the equation
 * @param acc Account to trade with
 */
async function swapForToken(
  amount: number,
  x: number,
  acc: number
): Promise<boolean> {
  let account: PrivateKey;
  account = acc == 0 ? account1 : account2;
  const { nonce: snappNonce } = await Mina.getAccount(snappAddress);

  let result = true;
  await Mina.transaction(account, async () => {
    const a = UInt64.fromNumber(amount);

    //const p = await Party.createSigned(account);
    const p = await Party.createUnsigned(account.toPublicKey());
    p.balance.subInPlace(a);

    await exchangeInstance.swapForToken(
      UInt64.fromNumber(amount),
      new Field(x),
      Signature.create(account, snappNonce.toFields()),
      account.toPublicKey()
    );
  })
    .send()
    .wait()
    .catch((e) => {
      console.log(e);
      result = false;
    });

  return result;
}

/**
 * Fetches the account status
 * @returns Returns AccountState
 */
async function fetchAccountStates(): Promise<AccountState> {
  const a1 = await Mina.getAccount(accounts[0].toPublicKey());
  const a2 = await Mina.getAccount(accounts[1].toPublicKey());
  const s = await Mina.getAccount(snappAddress);

  let accState: AccountState = {
    account1: {
      address: "B62qqpujuZ5W9uGtEwJv9R9dP8475hjFd93D4fVXoVPi9tmAMsQZBhn", // just so it looks a little cooler on the frontend ;) placeholder
      balance: a1.balance.toString(),
      balanceToken: s.snapp.appState[4].toString(),
    },
    account2: {
      address: "B62qmMibpKUbDaWa1CqNaKaStXN7fbL4dqnYESqyVuFEG6r65KuESFQ", // just so it looks a little cooler on the frontend ;) placeholder
      balance: a2.balance.toString(),
      balanceToken: s.snapp.appState[5].toString(),
    },
    snapp: {
      address: "B62qpWaQoQoPL5AGta7Hz2DgJ9CJQnpunjzCGTdw8KiCCD1hX8fNHuR", // just so it looks a little cooler on the frontend ;) placeholder
      balance: s.balance.toString(),
      balanceToken: s.snapp.appState[3].toString(),
    },
  };
  /*   console.log(accState); */
  return accState;
}
