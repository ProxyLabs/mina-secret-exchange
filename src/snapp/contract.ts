import { QuadraticFunction } from './quadratic-function.js';

import {
  SmartContract,
  PublicKey,
  CircuitValue,
  Field,
  state,
  State,
  UInt64,
  method,
} from 'snarkyjs';

class SecretExchange extends SmartContract {
  @state(QuadraticFunction) quadraticFunction: State<QuadraticFunction>;

  constructor(
    address: PublicKey,
    quadraticFunction: QuadraticFunction,
    balance: UInt64
  ) {
    super(address);
    this.balance.addInPlace(balance);
    this.quadraticFunction = State.init(quadraticFunction);
  }

  @method async setParameters(a: Field, b: Field, c: Field) {
    // TODO: do some assertions before you can set a state
    //this.quadraticFunction.set(new QuadraticFunction(a, b, c));
  }

  @method async verifySolution(x: Field) {
    // a * x * x + b * x + c;
    const func = await this.quadraticFunction.get();

    const a = func.a;
    const b = func.b;
    const c = func.c;

    let ax2 = a.mul(x).mul(x);

    let bx = b.mul(x);

    let solution = ax2.add(bx).sub(c);

    // TODO: maybe threshold
    // we are checking that x satisfies the equation ax² + bx - c = 0
    solution.assertEquals(0);
  }
}

export { SecretExchange };
