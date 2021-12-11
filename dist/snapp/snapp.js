/* import {
  deployContract,
  getEquationParameters,
  submitSolution,
} from "./contract-util.js"; */
import { generateFunctionParameters, solver } from "./util.js";
export { init, submitSolution };
let ContractUtils;
async function init() {
    let [a, b, c] = generateFunctionParameters();
    ContractUtils = await import("./contract-util.js");
    await ContractUtils.deployContract(a, b, c);
    /*   let [x, y, z] = await getEquationParameters();
     */
    let [x1, x2] = solver(a, b, c);
    console.log(`deployed snapp with equation of form ${a}x² + ${b}x - ${c}; possible solutions would be x1 = ${x1}, x2 = ${x2}`);
    return [a, b, c];
}
async function submitSolution(x) {
    return await ContractUtils.submitSolution(x);
}
