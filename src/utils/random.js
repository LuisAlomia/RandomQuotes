const numberRandom = (array) => Math.floor(Math.random() * array.length);

const indexRandom = (array) => {
  const index = numberRandom(array);
  return array[index];
};

export default indexRandom;
