const getArgumentsValue = () => {
  const objectOfValue = {
    blur: document.querySelector('[name="blur"]').value,
    invert: document.querySelector('[name="invert"]').value,
    sepia: document.querySelector('[name="sepia"]').value,
    saturate: document.querySelector('[name="saturate"]').value,
    hue: document.querySelector('[name="hue"]').value,
  };

  let outArguments = document.querySelector('.filter-arguments');
  outArguments.value = `blur(${objectOfValue.blur}px) invert(${objectOfValue.invert}%) sepia(${objectOfValue.sepia}%) saturate(${objectOfValue.saturate}%) hue-rotate(${objectOfValue.hue}deg)`;

  console.log(objectOfValue);
  return objectOfValue;
};

export { getArgumentsValue };
