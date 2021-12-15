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

export { SecretExchange };

// the contract
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

    // initial token balance
    this.tokenBalance = State.init(balance.value.mul(10));

    // keeping track of the balance of two accounts
    this.owners = owners;

    // balance of p1 and p2
    // balance lives on chain
    this.balanceP1 = State.init(Field.zero);
    this.balanceP2 = State.init(Field.zero);
  }

  @method async swapForMina(
    amount: UInt64,
    x: Field,
    s: Signature,
    pKey: PublicKey
  ) {
    (await this.verify(x)).assertEquals(Bool(true));

    // making sure key is inside of owners list
    containsPublicKey(this.owners, pKey).assertEquals(true);

    // getting balances

    let balanceP1 = await this.balanceP1.get();
    let balanceP2 = await this.balanceP2.get();

    // making sure the right account is requesting a swap
    const nonce: UInt32 = await this.nonce;
    s.verify(pKey, nonce.toFields()).assertEquals(true);

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

    const tokenBalance = await this.tokenBalance.get();
    this.tokenBalance.set(tokenBalance.add(amount.value));
    // finally, sub mina from snapp account and free it to be collected by the swap requestor
    this.balance.subInPlace(amount);
  }

  @method async swapForToken(
    amount: UInt64,
    x: Field,
    s: Signature,
    pKey: PublicKey
  ) {
    (await this.verify(x)).assertEquals(Bool(true));

    // making sure key is inside of owners list
    containsPublicKey(this.owners, pKey).assertEquals(true);

    // making sure the right account is requesting a swap
    const nonce: UInt32 = await this.nonce;
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
    } else if (pKey.equals(this.owners[1]).toBoolean()) {
      let balanceBefore = await this.balanceP2.get();
      this.balanceP2.set(balanceBefore.add(amount.value));
    }
  }

  async verify(x: Field): Promise<Bool> {
    // a * x * x - b * x + c;
    const func = await this.quadraticFunction.get();

    const a = func.a;
    const b = func.b;
    const c = func.c;

    let ax2 = a.mul(x).mul(x);

    let bx = b.mul(x);

    let solution = ax2.sub(bx).add(c);

    // we are checking that x satisfies the equation ax² - bx + c = 0
    let result = solution.equals(0);
    return result;
  }

  @method async verifySolution(x: Field, pKey: PublicKey) {
    containsPublicKey(this.owners, pKey).assertEquals(true);
    (await this.verify(x)).assertEquals(Bool(true));
  }
}

function containsPublicKey(xs: Array<PublicKey>, x: PublicKey): Bool {
  return xs.map((y) => x.equals(y)).reduce(Bool.or);
}
