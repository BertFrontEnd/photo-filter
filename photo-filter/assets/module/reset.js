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

  document.querySelector('.filter-arguments').value =
    'blur(0px) invert(0%) sepia(0%) saturate(100%) hue-rotate(0deg)';
};

export { pressReset };
