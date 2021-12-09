import { isReady, shutdown, Field } from 'snarkyjs';

const init = async () => {
  await isReady;

  // using module to keep the values within humand sovle-able range
  let max = 5;

  // generating the a,b,c parameters for the smart contract
  let a = parseInt(Field.random().toString()) % max;
  let b = parseInt(Field.random().toString()) % max;
  let c = parseInt(Field.random().toString()) % max;

  console.log(a);
  console.log(b);
  console.log(c);
  console.log('222');
};

init();

shutdown();
