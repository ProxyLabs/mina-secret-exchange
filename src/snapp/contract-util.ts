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
} from "snarkyjs";

import { SecretExchange } from "./contract.js";
import { QuadraticFunction } from "./quadratic-function.js";

export { deployContract, getEquationParameters, submitSolution };

await isReady;

let quadraticFunction: QuadraticFunction;
let exchangeInstance: SecretExchange;

const Local = Mina.LocalBlockchain();
Mina.setActiveInstance(Local);
const account1 = Local.testAccounts[0].privateKey;
const account2 = Local.testAccounts[1].privateKey;

let snappPrivkey = PrivateKey.random();
let snappAddress = snappPrivkey.toPublicKey();

async function deployContract(a: number, b: number, c: number) {
  console.log("deploying");
  await Mina.transaction(account1, async () => {
    const amount = UInt64.fromNumber(1000000);
    const p = await Party.createSigned(account2);
    p.balance.subInPlace(amount);

    quadraticFunction = new QuadraticFunction(Field(a), Field(b), Field(c));
    exchangeInstance = new SecretExchange(
      snappAddress,
      quadraticFunction,
      amount
    );

    await exchangeInstance.setParameters(Field(a), Field(b), Field(c));
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
    await exchangeInstance.verifySolution(new Field(x));
  })
    .send()
    .wait()
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
