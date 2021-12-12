// Tests correct generation of equation and surrounding functions

import {
  generateFunctionParameters,
  solver,
  sanityCheck,
} from "../dist/snapp/util";

describe("Testing euquation parameter generation and surrounding functions", () => {
  test("generateFunctionParameters() should correctly generate parameters to be within range", () => {
    let range = 10;
    for (let index = 0; index < 20; index++) {
      let params = generateFunctionParameters(range);
      expect(params[0]).toBeLessThanOrEqual(range);
      expect(params[1]).toBeLessThanOrEqual(range);
      expect(params[2]).toBeLessThanOrEqual(range);
    }
  });

  test("solver() should correctly solve the equation", () => {
    let range = 10;
    for (let index = 0; index < 20; index++) {
      let params = generateFunctionParameters(range);

      let a = params[0];
      let b = params[1];
      let c = params[2];

      let [x1, x2] = solver(a, b, c);
      let solutionX1 = a * (x1 * x1) - b * x1 + c == 0;
      let solutionX2 = a * (x2 * x2) - b * x2 + c == 0;
      expect(solutionX1);
      expect(solutionX2);
    }
  });

  test("sanityCheck() should correctly return whether or not a solution is correct", () => {
    let range = 10;
    for (let index = 0; index < 20; index++) {
      let params = generateFunctionParameters(range);

      let a = params[0];
      let b = params[1];
      let c = params[2];

      let [x1, x2] = solver(a, b, c);

      let solutionX1 = a * (x1 * x1) - b * x1 + c == 0;
      let solutionX2 = a * (x2 * x2) - b * x2 + c == 0;

      let res1 = sanityCheck(a, b, c, x1);
      expect(solutionX1).toEqual(res1);
      let res2 = sanityCheck(a, b, c, x2);
      expect(solutionX2).toEqual(res2);
    }
  });

  test("sanityCheck() should correctly return whether or not a solution is correct false positive", () => {
    let range = 10;
    for (let index = 0; index < 20; index++) {
      let params = generateFunctionParameters(range);

      let a = params[0];
      let b = params[1];
      let c = params[2];

      let [x1, x2] = solver(a, b, c);

      let res1 = sanityCheck(a, b, c, -x1);
      expect(false).toEqual(res1);
      let res2 = sanityCheck(a, b, c, -x2);
      expect(false).toEqual(res2);
    }
  });
});
