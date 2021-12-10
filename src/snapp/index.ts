import {
  isReady,
  shutdown,
  Field,
  Mina,
  PrivateKey,
  UInt64,
  Party,
} from 'snarkyjs';

import {
  deployContract,
  getEquationParameters,
  submitSolution,
} from './contract-util.js';

async function init() {
  // using module to keep the values within humand sovle-able range
  let max = 5;
  // generating the a,b,c parameters for the smart contract
  let a = Math.floor(Math.random() * max + 1);
  let b = Math.floor(Math.random() * max);
  let c = Math.floor(Math.random() * max);

  // if a was 0 then the equation would be linear
  if (a == 0) {
    a = 1;
  }

  // TODO: remove; demo values sanity check
  // expected: 1 and -4
  a = 1;
  b = 3;
  c = 4;

  console.log(`a ${a}`);
  console.log(`b ${b}`);
  console.log(`c ${c}`);

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

function sanityCheck(a: number, b: number, c: number, x: number): boolean {
  // sanity check possible solution
  // ax² + bx - c = 0 must satisfy equation

  // making sure c is really negative or zero; if it wasnt we would get into imaginary territory
  c > 0 ? (c = c * -1) : c;
  let solution = a * x * x + b * x + c;

  // TODO: maybe a small threshold to avoid rounding errors?

  return solution == 0;
}

function solver(a: number, b: number, c: number): [number, number] {
  // ax² + bx - c = 0
  // x = (-b) + sqrt(b² - 4ac) / 2a

  // making sure c is really negative or zero; if it wasnt we would get into imaginary territory
  c > 0 ? (c = c * -1) : c;

  let x1: number;
  let x2: number;

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
