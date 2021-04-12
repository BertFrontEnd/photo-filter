const playSoundKeyboard = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  if (!audio) {
    return;
  } else {
    audio.currentTime = 0;
    audio.play();
  }
};

const addActiveState = (e) => {
  const keys = document.querySelectorAll(`div[data-key="${e.keyCode}"]`);
  for (let key of keys) {
    key.classList.add('piano-active');
    key.classList.add('piano-active-pseudo');
  }
};

const removeActiveState = (e) => {
  const keys = document.querySelectorAll(`div[data-key="${e.keyCode}"]`);
  for (let key of keys) {
    key.classList.remove('piano-active');
    key.classList.remove('piano-active-pseudo');
  }
};

export { playSoundKeyboard, addActiveState, removeActiveState };
