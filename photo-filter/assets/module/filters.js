const getFilter = (element) => {
  let value = +element.value;
  let sizing = element.dataset.sizing;
  console.log(value, sizing);
  return `${value}${sizing}`;
};

export { getFilter };
