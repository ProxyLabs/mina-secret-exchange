import { isReady, Field, Mina, PrivateKey, UInt64, Party, } from "snarkyjs";
import { SecretExchange } from "./contract.js";
import { QuadraticFunction } from "./quadratic-function.js";
export { deployContract, getEquationParameters, submitSolution, accounts, fetchAccountStates, };
await isReady;
let quadraticFunction;
let exchangeInstance;
const Local = Mina.LocalBlockchain();
Mina.setActiveInstance(Local);
let account1 = Local.testAccounts[0].privateKey;
let account2 = Local.testAccounts[1].privateKey;
const accounts = [account1, account2];
let snappPrivkey = PrivateKey.random();
let snappAddress = snappPrivkey.toPublicKey();
async function deployContract(a, b, c) {
    console.log("deploying");
    await Mina.transaction(account1, async () => {
        const amount = UInt64.fromNumber(1000000);
        const p = await Party.createSigned(account2);
        p.balance.subInPlace(amount);
        quadraticFunction = new QuadraticFunction(Field(a), Field(b), Field(c));
        exchangeInstance = new SecretExchange(snappAddress, quadraticFunction, amount);
        await exchangeInstance.setParameters(Field(a), Field(b), Field(c));
    })
        .send()
        .wait()
        .catch((e) => {
        console.log(e);
    });
}
async function submitSolution(x) {
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
async function getEquationParameters() {
    let snappState = (await Mina.getAccount(snappAddress)).snapp.appState;
    return [
        parseInt(snappState[0].toString()),
        parseInt(snappState[1].toString()),
        parseInt(snappState[2].toString()),
    ];
}
async function fetchAccountStates() {
    const a1 = await Mina.getAccount(accounts[0].toPublicKey());
    const a2 = await Mina.getAccount(accounts[1].toPublicKey());
    const s = await Mina.getAccount(snappAddress);
    let accState = {
        account1: {
            address: "B62qqpujuZ5W9uGtEwJv9R9dP8475hjFd93D4fVXoVPi9tmAMsQZBhn",
            privateKey: accounts[0],
            publicKey: accounts[0].toPublicKey(),
            balance: a1.balance,
            balanceToken: UInt64.fromNumber(99), // TODO: change
        },
        account2: {
            address: "B62qmMibpKUbDaWa1CqNaKaStXN7fbL4dqnYESqyVuFEG6r65KuESFQ",
            privateKey: accounts[1],
            publicKey: accounts[1].toPublicKey(),
            balance: a2.balance,
            balanceToken: UInt64.fromNumber(99), // TODO: change
        },
        snapp: {
            address: "B62qpWaQoQoPL5AGta7Hz2DgJ9CJQnpunjzCGTdw8KiCCD1hX8fNHuR",
            publicKey: snappAddress,
            balance: s.balance,
            balanceToken: UInt64.fromNumber(99), // TODO: change
        },
    };
    /*   console.log(accState); */
    return accState;
}
