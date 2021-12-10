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
import { CircuitValue, Field, prop } from 'snarkyjs';
class QuadraticFunction extends CircuitValue {
  constructor(a, b, c) {
    super();
    this.a = a;
    this.b = b;
    this.c = c;
    //console.log(`new qf created with ${a} ${b} ${c}`);
  }
}
__decorate(
  [prop, __metadata('design:type', Field)],
  QuadraticFunction.prototype,
  'a',
  void 0
);
__decorate(
  [prop, __metadata('design:type', Field)],
  QuadraticFunction.prototype,
  'b',
  void 0
);
__decorate(
  [prop, __metadata('design:type', Field)],
  QuadraticFunction.prototype,
  'c',
  void 0
);
export { QuadraticFunction };
