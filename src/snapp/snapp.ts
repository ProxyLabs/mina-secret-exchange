import {
  isReady,
  shutdown,
  Field,
  Mina,
  PrivateKey,
  UInt64,
  Party,
  Account,
} from "snarkyjs";

import { generateFunctionParameters, solver } from "./util.js";

export { init, submitSolution, getState, swapToken, deployDebugContract };

// dynamic import so page doesnt freeze at startup
let ContractUtils;

/**
 * Deploys a debug contract with equation parameters a = 11, b = 33, c = and roots: x_1 = 0, x_1 = 0
 * @returns Returns equation parameters`a`, `b`, `c`
 */
async function deployDebugContract(): Promise<[number, number, number]> {
  let [a, b, c] = [11, 33, 0];

  ContractUtils = await import("./contract-util.js");

  await ContractUtils.deployContract(a, b, c);

  let [x1, x2] = solver(a, b, c);
  /*   console.log(
    `deployed snapp with equation of form ${a}x² - ${b}x + ${c}; possible solutions would be x1 = ${x1}, x2 = ${x2}`
  ); */

  return [a, b, c];
}

/**
 * Deploys a contract. Generates equation parameters automatically and returns them.
 * @param max Limit for parameter, parameters cant exceed max
 * @returns Returns equation parameters`a`, `b`, `c`
 */
async function init(max): Promise<[number, number, number]> {
  let [a, b, c] = generateFunctionParameters(max);

  ContractUtils = await import("./contract-util.js");

  await ContractUtils.deployContract(a, b, c);

  /*   let sn: SnappState = {
    accounts: [ContractUtils.account1, ContractUtils.account2],
    balanceMina: 
  };
 */
  /*   let [x, y, z] = await getEquationParameters();
   */
  let [x1, x2] = solver(a, b, c);
  /*   console.log(
    `deployed snapp with equation of form ${a}x² - ${b}x + ${c}; possible solutions would be x1 = ${x1}, x2 = ${x2}`
  ); */

  return [a, b, c];
}

/**
 * Submits a solution to the contract to verify it
 * @param x One possible solution for the equation
 * @returns Returns true or false whether submission has failed or succeeded
 */
async function submitSolution(x: number): Promise<boolean> {
  return await ContractUtils.submitSolution(x);
}

/**
 * Gets the snapp state
 * @returns Returns the snapp state
 */
async function getState(): Promise<any> {
  let res = await ContractUtils.fetchAccountStates();
  return res;
}

/**
 * Swaps a token for another
 * @param pair Swap pair 'MINA/PROXY' or something else
 * @param amount Amount you want to swap - 1 to 1
 * @param account Account number to trade with - 0 or 1 currently
 * @param x Solution to the equation to check you are allowed to use the exchange
 * @returns Returns whether or not swap was successful
 */
async function swapToken(
  pair: string,
  amount: number,
  account: number,
  x: number
): Promise<boolean> {
  let res = false;
  if (pair == "PROXY/MINA") {
    res = await ContractUtils.swapForMina(amount, x, account);
  } else {
    res = await ContractUtils.swapForToken(amount, x, account);
  }

  return res;
}
