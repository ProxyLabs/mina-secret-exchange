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
import { SmartContract, PublicKey, Field, state, State, UInt64, method, Bool, Signature, } from "snarkyjs";
export { SecretExchange };
// the contract
class SecretExchange extends SmartContract {
    constructor(address, quadraticFunction, balance, owners) {
        super(address);
        this.balance.addInPlace(balance);
        this.quadraticFunction = State.init(quadraticFunction);
        // initial token balance
        this.tokenBalance = State.init(balance.value.mul(10));
        // keeping track of the balance of two accounts
        this.owners = owners;
        // balance of p1 and p2
        // balance lives on chain
        this.balanceP1 = State.init(Field.zero);
        this.balanceP2 = State.init(Field.zero);
    }
    async swapForMina(amount, x, s, pKey) {
        // verifiying x again
        const func = await this.quadraticFunction.get();
        const a = func.a;
        const b = func.b;
        const c = func.c;
        let ax2 = a.mul(x).mul(x);
        let bx = b.mul(x);
        let solution = ax2.sub(bx).add(c);
        // we are checking that x satisfies the equation ax² - bx + c = 0
        solution.assertEquals(0);
        // proceeding with swap
        // making sure key is inside of owners list
        containsPublicKey(this.owners, pKey).assertEquals(true);
        // getting balances
        let balanceP1 = await this.balanceP1.get();
        let balanceP2 = await this.balanceP2.get();
        // making sure the right account is requesting a swap
        const nonce = await this.nonce;
        s.verify(pKey, nonce.toFields()).assertEquals(true);
        if (pKey.equals(this.owners[0]).toBoolean()) {
            // Making sure token balance is enough so it can be swapped for mina
            // finally setting the new token balance
            balanceP1.assertGte(amount.value);
            this.balanceP1.set(balanceP1.sub(amount.value));
        }
        else if (pKey.equals(this.owners[1]).toBoolean()) {
            // Making sure token balance is enough so it can be swapped for mina
            // finally setting the new token balance      balanceP2.assertGte(amount.value);
            balanceP2.assertGte(amount.value);
            this.balanceP2.set(balanceP2.sub(amount.value));
        }
        const tokenBalance = await this.tokenBalance.get();
        this.tokenBalance.set(tokenBalance.add(amount.value));
        // finally, sub mina from snapp account and free it to be collected by the swap requestor
        this.balance.subInPlace(amount);
    }
    async swapForToken(amount, x, s, pKey) {
        // verifiying x again
        const func = await this.quadraticFunction.get();
        const a = func.a;
        const b = func.b;
        const c = func.c;
        let ax2 = a.mul(x).mul(x);
        let bx = b.mul(x);
        let solution = ax2.sub(bx).add(c);
        // we are checking that x satisfies the equation ax² - bx + c = 0
        solution.assertEquals(0);
        // proceeding with swap
        // making sure key is inside of owners list
        containsPublicKey(this.owners, pKey).assertEquals(true);
        // making sure the right account is requesting a swap
        const nonce = await this.nonce;
        s.verify(pKey, nonce.toFields()).assertEquals(true);
        let tokenSupply = await this.tokenBalance.get();
        // making sure we still have enough toklen in our reserve
        tokenSupply.assertGte(amount.value);
        // add mina to the contract
        this.balance.addInPlace(amount);
        const tokenBalance = await this.tokenBalance.get();
        this.tokenBalance.set(tokenBalance.sub(amount.value));
        if (pKey.equals(this.owners[0]).toBoolean()) {
            let balanceBefore = await this.balanceP1.get();
            this.balanceP1.set(balanceBefore.add(amount.value));
        }
        else if (pKey.equals(this.owners[1]).toBoolean()) {
            let balanceBefore = await this.balanceP2.get();
            this.balanceP2.set(balanceBefore.add(amount.value));
        }
    }
    async verifySolution(x, pKey) {
        containsPublicKey(this.owners, pKey).assertEquals(true);
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
    state(Field),
    __metadata("design:type", State)
], SecretExchange.prototype, "tokenBalance", void 0);
__decorate([
    state(Field),
    __metadata("design:type", State)
], SecretExchange.prototype, "balanceP1", void 0);
__decorate([
    state(Field),
    __metadata("design:type", State)
], SecretExchange.prototype, "balanceP2", void 0);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UInt64,
        Field,
        Signature,
        PublicKey]),
    __metadata("design:returntype", Promise)
], SecretExchange.prototype, "swapForMina", null);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UInt64,
        Field,
        Signature,
        PublicKey]),
    __metadata("design:returntype", Promise)
], SecretExchange.prototype, "swapForToken", null);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Field, PublicKey]),
    __metadata("design:returntype", Promise)
], SecretExchange.prototype, "verifySolution", null);
function containsPublicKey(xs, x) {
    return xs.map((y) => x.equals(y)).reduce(Bool.or);
}
