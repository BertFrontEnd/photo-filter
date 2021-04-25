const getArray = () => {
  let array = [];
  let count = 1;
  while (array.length < 20) {
    array.push(count);
    count++;
  }
  return array;
};

export { getArray };
