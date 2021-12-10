import {
  Field,
  isReady,
  shutdown,
  SmartContract,
  state,
  State,
} from "snarkyjs";

export { myFunc };

// class MyContract extends SmartContract {
//   @state(Field) x: State<Field>;
// }

async function myFunc() {
  await setup();
}

async function setup() {
  await isReady;
  console.log(Field(3).toString());
}

// export { myFunc };

// function myFunc() {
//   console.log("hi");
// }
