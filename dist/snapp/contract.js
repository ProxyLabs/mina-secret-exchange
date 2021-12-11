var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { QuadraticFunction } from "./quadratic-function.js";
import { SmartContract, Field, state, State, method, } from "snarkyjs";
class SecretExchange extends SmartContract {
    constructor(address, quadraticFunction, balance) {
        super(address);
        this.balance.addInPlace(balance);
        this.quadraticFunction = State.init(quadraticFunction);
    }
    async setParameters(a, b, c) {
        // TODO: do some assertions before you can set a state
        //this.quadraticFunction.set(new QuadraticFunction(a, b, c));
    }
    async verifySolution(x) {
        // a * x * x - b * x + c;
        const func = await this.quadraticFunction.get();
        const a = func.a;
        const b = func.b;
        const c = func.c;
        let ax2 = a.mul(x).mul(x);
        let bx = b.mul(x);
        let solution = ax2.sub(bx).add(c);
        // we are checking that x satisfies the equation ax² - bx + c = 0
        solution.assertEquals(0);
    }
}
__decorate([
    state(QuadraticFunction),
    __metadata("design:type", State)
], SecretExchange.prototype, "quadraticFunction", void 0);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Field, Field, Field]),
    __metadata("design:returntype", Promise)
], SecretExchange.prototype, "setParameters", null);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Field]),
    __metadata("design:returntype", Promise)
], SecretExchange.prototype, "verifySolution", null);
export { SecretExchange };
