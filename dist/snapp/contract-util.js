import { isReady, shutdown, Field, Mina, PrivateKey, UInt64, Party, } from "snarkyjs";
import { SecretExchange } from "./contract.js";
import { QuadraticFunction } from "./quadratic-function.js";
await isReady;
let quadraticFunction;
let exchangeInstance;
const Local = Mina.LocalBlockchain();
Mina.setActiveInstance(Local);
const account1 = Local.testAccounts[0].privateKey;
const account2 = Local.testAccounts[1].privateKey;
let snappPrivkey = PrivateKey.random();
let snappAddress = snappPrivkey.toPublicKey();
async function deployContract(a, b, c) {
    console.log("deploying");
    await Mina.transaction(account1, async () => {
        const amount = UInt64.fromNumber(1000000000);
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
    await Mina.transaction(account1, async () => {
        await exchangeInstance.verifySolution(new Field(x));
    })
        .send()
        .wait()
        .catch((e) => {
        console.log(e);
    });
}
async function getEquationParameters() {
    let snappState = (await Mina.getAccount(snappAddress)).snapp.appState;
    return [
        parseInt(snappState[0].toString()),
        parseInt(snappState[1].toString()),
        parseInt(snappState[2].toString()),
    ];
}
export { deployContract, getEquationParameters, submitSolution };
shutdown();
