import {
  activateFullscreen,
  deactivateFullscreen,
} from './assets/module/fullscreen.js';

const toFullscreenButton = document.querySelector('.open-fullscreen');
const fromFullscreenButton = document.querySelector('.close-fullscreen');

toFullscreenButton.addEventListener('click', () => {
  activateFullscreen();
  fromFullscreenButton.style.display = 'block';
  toFullscreenButton.style.display = 'none';
});

fromFullscreenButton.addEventListener('click', () => {
  deactivateFullscreen();
  toFullscreenButton.style.display = 'block';
  fromFullscreenButton.style.display = 'none';
});

window.addEventListener('fullscreenchange', () => {
  if (!document.fullscreenElement) {
    toFullscreenButton.style.display = 'block';
    fromFullscreenButton.style.display = 'none';
  }
});
