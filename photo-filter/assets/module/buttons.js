const addActiveButton = (node, e) => {
  if (!e.target.classList.contains('btn-active')) {
    node.forEach((el) => {
      el.classList.remove('btn-active');
      el.removeAttribute('disabled');
    });

    e.target.classList.add('btn-active');
    e.target.setAttribute('disabled', 'disabled');

    node.forEach((el) => {
      setTimeout(() => {
        el.removeAttribute('disabled');
      }, 1000);
    });
  }
};

const removeActiveButton = (node) => {
  node.forEach((el) => {
    el.classList.remove('btn-active');
  });
};

export { addActiveButton, removeActiveButton };
