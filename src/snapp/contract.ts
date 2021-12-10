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

    this.quadraticFunction.set(new QuadraticFunction(a, b, c));
  }

  @method async verifySolution(x: Field) {
    // a * x * x + b * x + c;
    const a = (await this.quadraticFunction.get()).a;
    const b = (await this.quadraticFunction.get()).b;
    const c = (await this.quadraticFunction.get()).c;

    console.log('x ' + x.toString());
    console.log(a);
    console.log(b);
    console.log(c);
    /*     console.log(a.toString());
    console.log(b.toString());
    console.log(c.toString()); */
    // const x = await this.x.get();
  }
}

export { SecretExchange };
