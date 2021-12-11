/* import {
  deployContract,
  getEquationParameters,
  submitSolution,
} from "./contract-util.js"; */
import { generateFunctionParameters, solver } from "./util.js";
export { init, submitSolution, getState };
let ContractUtils;
async function init(max) {
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
    console.log(`deployed snapp with equation of form ${a}x² - ${b}x + ${c}; possible solutions would be x1 = ${x1}, x2 = ${x2}`);
    return [a, b, c];
}
async function submitSolution(x) {
    return await ContractUtils.submitSolution(x);
}
async function getState() {
    let res = await ContractUtils.fetchAccountStates();
    return res;
}
