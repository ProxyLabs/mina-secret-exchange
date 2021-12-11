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

interface SnappAccount {
  address: String;
  publicKey: PublicKey;
  balance: UInt64;
  balanceToken: UInt64;
}
interface Account {
  address: String;
  privateKey: PrivateKey;
  publicKey: PublicKey;
  balance: UInt64;
  balanceToken: UInt64;
}
interface AccountState {
  account1: Account;
  account2: Account;
  snapp: SnappAccount;
}

let quadraticFunction: QuadraticFunction;
let exchangeInstance: SecretExchange;

const Local = Mina.LocalBlockchain();
Mina.setActiveInstance(Local);
let account1 = Local.testAccounts[0].privateKey;
let account2 = Local.testAccounts[1].privateKey;
const accounts = [account1, account2];
let snappPrivkey = PrivateKey.random();
let snappAddress = snappPrivkey.toPublicKey();

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

async function getEquationParameters(): Promise<[number, number, number]> {
  let snappState = (await Mina.getAccount(snappAddress)).snapp.appState;
  return [
    parseInt(snappState[0].toString()),
    parseInt(snappState[1].toString()),
    parseInt(snappState[2].toString()),
  ];
}

async function swapForMina(
  amount: number,
  x: number,
  acc: number
): Promise<boolean> {
  let account: PrivateKey;
  account = acc == 0 ? account1 : account2;

  console.log("----------");
  let before = await Mina.getAccount(account.toPublicKey());
  console.log("balance before: " + before.balance.value);
  let s = await Mina.getAccount(snappAddress);
  console.log("snapp after: " + s.balance.value);
  let sc = await Mina.getAccount(snappAddress);
  console.log("token balance: " + sc.snapp.appState[4]);
  console.log("token balance: " + sc.snapp.appState[5]);
  console.log("----------");
  let result = true;
  await Mina.transaction(account, async () => {
    await exchangeInstance.swapForMina(
      UInt64.fromNumber(amount),
      new Field(x),
      Signature.create(account, Field(1).toFields()),
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
  console.log("swapped " + result);
  console.log("----------");
  let after = await Mina.getAccount(account.toPublicKey());
  console.log("balance after: " + after.balance.value);
  let sa = await Mina.getAccount(snappAddress);
  console.log("snapp after: " + sa.balance.value);
  let scd = await Mina.getAccount(snappAddress);
  console.log("token balance: " + scd.snapp.appState[4]);
  console.log("token balance: " + scd.snapp.appState[5]);
  console.log("----------");
  return result;
}
async function swapForToken(
  amount: number,
  x: number,
  acc: number
): Promise<boolean> {
  let account: PrivateKey;
  account = acc == 0 ? account1 : account2;

  console.log("----------");
  let before = await Mina.getAccount(account1.toPublicKey());
  console.log("balance before: " + before.balance.value);
  let s = await Mina.getAccount(snappAddress);
  console.log("snapp after: " + s.balance.value);
  let sc = await Mina.getAccount(snappAddress);
  console.log("token supply: " + sc.snapp.appState[3]);
  console.log("token balance: " + sc.snapp.appState[4]);
  console.log("token balance: " + sc.snapp.appState[5]);
  console.log("----------");
  let result = true;
  await Mina.transaction(account1, async () => {
    const a = UInt64.fromNumber(1000000000);
    const p = await Party.createUnsigned(account1.toPublicKey());
    p.balance.subInPlace(a);

    await exchangeInstance.swapForToken(
      UInt64.fromNumber(amount),
      new Field(x),
      Signature.create(account, Field(1).toFields()),
      account1.toPublicKey()
    );
  })
    .send()
    .wait()
    .catch((e) => {
      console.log(e);
      result = false;
    });
  console.log("swapped " + result);
  console.log("----------");
  let after = await Mina.getAccount(account1.toPublicKey());
  console.log("balance after: " + after.balance.value);
  console.log("----");
  let sa = await Mina.getAccount(snappAddress);
  console.log("snapp after: " + sa.balance.value);
  let scd = await Mina.getAccount(snappAddress);
  console.log("token supply: " + scd.snapp.appState[3]);
  console.log("token balance: " + scd.snapp.appState[4]);
  console.log("token balance: " + scd.snapp.appState[5]);
  console.log("----------");
  return result;
}

async function fetchAccountStates(): Promise<AccountState> {
  const a1 = await Mina.getAccount(accounts[0].toPublicKey());
  const a2 = await Mina.getAccount(accounts[1].toPublicKey());
  const s = await Mina.getAccount(snappAddress);

  let accState: AccountState = {
    account1: {
      address: "B62qqpujuZ5W9uGtEwJv9R9dP8475hjFd93D4fVXoVPi9tmAMsQZBhn", // just so it looks a little cooler on the frontend ;) placeholder
      privateKey: accounts[0],
      publicKey: accounts[0].toPublicKey(),
      balance: a1.balance,
      balanceToken: UInt64.fromNumber(99), // TODO: change
    },
    account2: {
      address: "B62qmMibpKUbDaWa1CqNaKaStXN7fbL4dqnYESqyVuFEG6r65KuESFQ", // just so it looks a little cooler on the frontend ;) placeholder
      privateKey: accounts[1],
      publicKey: accounts[1].toPublicKey(),
      balance: a2.balance,
      balanceToken: UInt64.fromNumber(99), // TODO: change
    },
    snapp: {
      address: "B62qpWaQoQoPL5AGta7Hz2DgJ9CJQnpunjzCGTdw8KiCCD1hX8fNHuR", // just so it looks a little cooler on the frontend ;) placeholder
      publicKey: snappAddress,
      balance: s.balance,
      balanceToken: UInt64.fromNumber(99), // TODO: change
    },
  };
  /*   console.log(accState); */
  return accState;
}
