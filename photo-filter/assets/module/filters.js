const getFilter = (element) => {
  let value = +element.value;
  let sizing = element.dataset.sizing;
  return `${value}${sizing}`;
};

export { getFilter };
