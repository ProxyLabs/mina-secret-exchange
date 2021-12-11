import { submitSolution, swapToken, deployDebugContract, } from "./snapp.js";
// playground for testing the contract itself
const main = async () => {
    console.log("test");
    let res = await deployDebugContract();
    console.log(res);
    let res2 = await submitSolution(0);
    console.log(res2);
    let res4 = await swapToken("MINA/PROXY", 1123123, 0, 0);
    console.log(res4);
    /*   let res4 = await swapToken("PROXY/MINA", 30000000, 0, 0);
    console.log(res4); */
};
main();
