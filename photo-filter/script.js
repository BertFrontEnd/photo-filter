// Change fullscreen

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

// Toggle Buttons

import {
  addActiveButton,
  removeActiveButton,
} from './assets/module/buttons.js';

const buttons = document.querySelectorAll('.btn-for-active');

for (let button of buttons) {
  button.addEventListener('click', (e) => {
    addActiveButton(buttons, e);
    setTimeout(() => {
      removeActiveButton(buttons);
    }, 250);
  });
}

// Volume

import { getValue } from './assets/module/value.js';

const labelFields = document.querySelectorAll('.filters > label');

/* const inputRanges = document.querySelectorAll('input[type="range"]');
const outputRanges = document.querySelectorAll('[name="result"]'); */

for (let value of labelFields) {
  value.addEventListener('input', (e) => {
    getValue(value);
  });
}

// Reset

import { pressReset } from './assets/module/reset.js';

const resetButton = document.querySelector('.btn-reset');

resetButton.addEventListener('click', () => {
  for (let value of labelFields) {
    pressReset(value);
  }
});
