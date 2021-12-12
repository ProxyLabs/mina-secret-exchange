import { generateFunctionParameters, solver } from "./util.js";
export { init, submitSolution, getState, swapToken, deployDebugContract };
// dynamic import so page doesnt freeze at startup
let ContractUtils;
// deploying a debug contract
async function deployDebugContract() {
    let [a, b, c] = [11, 33, 0];
    ContractUtils = await import("./contract-util.js");
    await ContractUtils.deployContract(a, b, c);
    let [x1, x2] = solver(a, b, c);
    /*   console.log(
      `deployed snapp with equation of form ${a}x² - ${b}x + ${c}; possible solutions would be x1 = ${x1}, x2 = ${x2}`
    ); */
    return [a, b, c];
}
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
    /*   console.log(
      `deployed snapp with equation of form ${a}x² - ${b}x + ${c}; possible solutions would be x1 = ${x1}, x2 = ${x2}`
    ); */
    return [a, b, c];
}
async function submitSolution(x) {
    return await ContractUtils.submitSolution(x);
}
async function getState() {
    let res = await ContractUtils.fetchAccountStates();
    return res;
}
async function swapToken(pair, amount, account, x) {
    let res = false;
    if (pair == "PROXY/MINA") {
        res = await ContractUtils.swapForMina(amount, x, account);
    }
    else {
        res = await ContractUtils.swapForToken(amount, x, account);
    }
    return res;
}
