import { SmartContract, PublicKey } from 'snarkyjs';

class SecretExchange extends SmartContract {
  // we're looking to solve a quadratic function of the form ax²+bx+c = 0 for a, b and c defined when the contract is deployed

  constructor(address: PublicKey) {
    super(address);
  }
}

export { SecretExchange };
