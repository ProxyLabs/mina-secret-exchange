import {
  SmartContract,
  PublicKey,
  CircuitValue,
  Field,
  state,
  State,
  prop,
  method,
} from 'snarkyjs';

class QuadraticFunction extends CircuitValue {
  // we're looking to solve a quadratic function of the form ax²+bx-c = 0 for a, b and c defined when the contract is deployed
  // note: we want c to be either negative or zero so we can easily get the root of that equation
  // obviously an quadratic equasion of the form ax²+bx-c = 0 has either one or two solutions, but we dont want to share the solution with our competitors who also want to use that exchange ;)

  @prop a: Field;
  @prop b: Field;
  @prop c: Field;

  constructor(a: Field, b: Field, c: Field) {
    super();
    this.a = a;
    this.b = b;
    this.c = c;
    //console.log(`new qf created with ${a} ${b} ${c}`);
  }
}

export { QuadraticFunction };
