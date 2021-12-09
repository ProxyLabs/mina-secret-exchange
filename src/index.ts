import { isReady, shutdown, Field } from 'snarkyjs';

const init = async () => {
  await isReady;

  console.log(Field.random());
};

init();

shutdown();
