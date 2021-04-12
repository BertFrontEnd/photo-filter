const keysPiano = document.querySelectorAll('.key');
const sharpsPiano = document.querySelectorAll('.sharp');
const pianoCollection = [...keysPiano, ...sharpsPiano];

const playAudio = (src) => {
  const audio = new Audio();
  audio.src = src;
  audio.currentTime = 0;
  audio.play();
};

const playSoundMouse = (e) => {
  if (e.target.classList.contains('piano-active')) {
    const note = e.target.dataset.note;
    const source = `./assets/audio/${note}.mp3`;
    playAudio(source);
  }
};

const startSound = (e) => {
  e.target.classList.add('piano-active');
  e.target.classList.add('piano-active-pseudo');
  playSoundMouse(e);
};

const stopSound = (e) => {
  e.target.classList.remove('piano-active');
  e.target.classList.remove('piano-active-pseudo');
};

const startCorrespondOver = (e) => {
  if (
    e.target.classList.contains('key') ||
    e.target.classList.contains('sharp')
  ) {
    e.target.classList.add('piano-active');
    e.target.classList.add('piano-active-pseudo');
  }

  pianoCollection.forEach((elem) => {
    elem.addEventListener('mouseover', startSound);
    elem.addEventListener('mouseout', stopSound);
  });
};

const stopCorrespondOver = () => {
  pianoCollection.forEach((elem) => {
    elem.classList.remove('piano-active');
    elem.classList.remove('piano-active-pseudo');
    elem.removeEventListener('mouseover', startSound);
    elem.removeEventListener('mouseout', stopSound);
  });
};

export { playSoundMouse, startCorrespondOver, stopCorrespondOver };
