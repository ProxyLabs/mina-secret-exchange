import { shutdown } from 'snarkyjs';
import { deployContract, getEquationParameters } from './contract-util.js';
async function init() {
  let [a, b, c] = generateFunctionParameters();
  // TODO: remove; demo values sanity check
  // expected: 1 and -4
  /*   a = 1;
    b = 3;
    c = 4; */
  console.log(`a ${a}`);
  console.log(`b ${b}`);
  console.log(`c ${c}`);
  // num % 1 == 0 // is whole number
  await deployContract(a, b, c);
  /*
    console.log(sanityCheck(a, b, c, -4));
    await submitSolution(1); */
  let [x, y, z] = await getEquationParameters();
  let [x1, x2] = solver(x, y, z);
  console.log(
    `deployed snapp with equation of form ${x}x² + ${y}x - ${z}; possible solutions would be x1 = ${x1}, x2 = ${x2}`
  );
}
function generateFunctionParameters() {
  let a = 0;
  let b = 0;
  let c = 0;
  // using module to keep the values within humand sovle-able range
  let max = 15;
  // generating fitting params
  // reason for the do while loop with root check at the end:
  // i dont want equations that have non-whole number roots
  // because that would be annoying to translate into Field elements
  // since Field elements only support whole numbers no floats afaik
  do {
    // generating the a,b,c parameters for the smart contract
    a = Math.floor(Math.random() * max + 1);
    b = Math.floor(Math.random() * max);
    c = Math.floor(Math.random() * max);
    // if a was 0 then the equation would be linear
    if (a == 0) {
      a = 1;
    }
  } while (solver(a, b, c)[0] % 1 != 0 || solver(a, b, c)[1] % 1 != 0);
  return [a, b, c];
}
function sanityCheck(a, b, c, x) {
  // sanity check possible solution
  // ax² + bx - c = 0 must satisfy equation
  // making sure c is really negative or zero; if it wasnt we would get into imaginary territory
  c > 0 ? (c = c * -1) : c;
  let solution = a * x * x + b * x + c;
  // TODO: maybe a small threshold to avoid rounding errors?
  return solution == 0;
}
function solver(a, b, c) {
  // ax² + bx - c = 0
  // x = (-b) + sqrt(b² - 4ac) / 2a
  // making sure c is really negative or zero; if it wasnt we would get into imaginary territory
  c > 0 ? (c = c * -1) : c;
  let x1;
  let x2;
  let discriminant = b * b - 4 * a * c;
  if (discriminant > 0) {
    x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
  } else if (discriminant == 0) {
    x1 = x2 = -b / (2 * a);
  }
  return [x1, x2];
}
init();
shutdown();
