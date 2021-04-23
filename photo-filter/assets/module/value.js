const getValue = (element) => {
  let firstSubElem = element.firstElementChild;
  let secondSubElem = element.lastElementChild;
  secondSubElem.textContent = firstSubElem.value;
};

export { getValue };
