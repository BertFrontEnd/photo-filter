const pressReset = (element) => {
  let firstSubElem = element.firstElementChild;
  let secondSubElem = element.lastElementChild;
  let attrName = firstSubElem.getAttribute('name');

  if (attrName !== 'saturate') {
    firstSubElem.value = 0;
    secondSubElem.textContent = '0';
  } else {
    firstSubElem.value = 100;
    secondSubElem.textContent = '100';
  }
};

export { pressReset };
