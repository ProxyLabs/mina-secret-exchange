import { SmartContract, PublicKey } from 'snarkyjs';

class SecretExchange extends SmartContract {
  // we're looking to solve a quadratic function of the form ax²+bx-c = 0 for a, b and c defined when the contract is deployed
  // note: we want c to be either negative or zero so we can easily get the root of that equation
  // obviously an quadratic equasion of the form ax²+bx-c = 0 has either one or two solutions, but we dont want to share the solution with our competitors who also want to use that exchange ;)

  constructor(address: PublicKey) {
    super(address);
  }
}

export { SecretExchange };
