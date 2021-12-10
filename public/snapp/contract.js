var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __metadata =
  (this && this.__metadata) ||
  function (k, v) {
    if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
      return Reflect.metadata(k, v);
  };
import { QuadraticFunction } from './quadratic-function.js';
import { SmartContract, Field, state, State, method } from 'snarkyjs';
class SecretExchange extends SmartContract {
  constructor(address, quadraticFunction, balance) {
    super(address);
    this.balance.addInPlace(balance);
    this.quadraticFunction = State.init(quadraticFunction);
  }
  async setParameters(a, b, c) {
    // TODO: do some assertions before you can set a state
    this.quadraticFunction.set(new QuadraticFunction(a, b, c));
  }
  async verifySolution(x) {
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
__decorate(
  [state(QuadraticFunction), __metadata('design:type', State)],
  SecretExchange.prototype,
  'quadraticFunction',
  void 0
);
__decorate(
  [
    method,
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [Field, Field, Field]),
    __metadata('design:returntype', Promise),
  ],
  SecretExchange.prototype,
  'setParameters',
  null
);
__decorate(
  [
    method,
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [Field]),
    __metadata('design:returntype', Promise),
  ],
  SecretExchange.prototype,
  'verifySolution',
  null
);
export { SecretExchange };
