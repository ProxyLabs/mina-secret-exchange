import { QuadraticFunction } from "./quadratic-function.js";

import {
  SmartContract,
  PublicKey,
  CircuitValue,
  Field,
  state,
  State,
  UInt64,
  method,
  Bool,
  Circuit,
  Signature,
  Party,
  UInt32,
} from "snarkyjs";

function containsPublicKey(xs: Array<PublicKey>, x: PublicKey): Bool {
  return xs.map((y) => x.equals(y)).reduce(Bool.or);
}

class SecretExchange extends SmartContract {
  @state(QuadraticFunction) quadraticFunction: State<QuadraticFunction>;

  @state(Field) tokenBalance: State<Field>;

  owners: Array<PublicKey>;

  @state(Field) balanceP1: State<Field>;
  @state(Field) balanceP2: State<Field>;

  constructor(
    address: PublicKey,
    quadraticFunction: QuadraticFunction,
    balance: UInt64,
    owners: Array<PublicKey>
  ) {
    super(address);
    this.balance.addInPlace(balance);
    this.quadraticFunction = State.init(quadraticFunction);

    this.tokenBalance = State.init(new Field(800).mul(1000000)); // 800 Token initial balance, mul 100000 cuz decimals

    // keeping track of the balance of two accounts
    this.owners = owners;

    // balance of p1 and p2
    let tkBalance = new Field(500000000);
    this.balanceP1 = State.init(tkBalance);
    this.balanceP2 = State.init(tkBalance);
  }

  @method async swapForMina(
    amount: UInt64,
    x: Field,
    s: Signature,
    pKey: PublicKey
  ) {
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
    // TODO: Change signature acceptance
    s.verify(pKey, Field(1).toFields()).assertEquals(true);

    if (pKey.equals(this.owners[0]).toBoolean()) {
      // Making sure token balance is enough so it can be swapped for mina
      // finally setting the new token balance

      balanceP1.assertGte(amount.value);
      this.balanceP1.set(balanceP1.sub(amount.value));
    } else if (pKey.equals(this.owners[1]).toBoolean()) {
      // Making sure token balance is enough so it can be swapped for mina
      // finally setting the new token balance      balanceP2.assertGte(amount.value);
      balanceP2.assertGte(amount.value);
      this.balanceP2.set(balanceP2.sub(amount.value));
    }

    // finally, sub mina from snapp account and free it to be collected by the swap requestor
    this.balance.subInPlace(amount);
  }

  @method async swapForToken(
    amount: UInt64,
    x: Field,
    s: Signature,
    pKey: PublicKey
  ) {
    this.balance.addInPlace(amount);
    console.log("just subbed 2");
    // verifiying x again
    /*     const func = await this.quadraticFunction.get();

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
    // TODO: Change signature acceptance
    s.verify(pKey, Field(1).toFields()).assertEquals(true);

    let tokenSupply = await this.tokenBalance.get();
 */
    // making sure we still have enough toklen in our reserve
    /*    tokenSupply.assertGte(amount.value);
     */
    // add mina to the contract

    /*
    if (pKey.equals(this.owners[0]).toBoolean()) {
      let balanceBefore = await this.balanceP1.get();
      await this.balanceP1.set(Field(3909));

      let after = await this.balanceP1.get();
      Circuit.asProver(() => {
        console.log("token balance after: " + after);
      });
    } else if (pKey.equals(this.owners[1]).toBoolean()) {
      // Making sure token balance is enough so it can be swapped for mina
      let balanceBefore = await this.balanceP2.get();
      this.balanceP2.set(balanceBefore.add(amount.toFields()[0]));
    } */
  }

  @method async verifySolution(x: Field, pKey: PublicKey) {
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

export { SecretExchange };
