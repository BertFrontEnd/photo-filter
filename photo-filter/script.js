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

// Set Filters

import { getFilter } from './assets/module/filters.js';

const imgFrame = document.querySelector('img');
const blurFilter = document.querySelector('[name="blur"]');
const invertFilter = document.querySelector('[name="invert"]');
const sepiaFilter = document.querySelector('[name="sepia"]');
const saturateFilter = document.querySelector('[name="saturate"]');
const hueFilter = document.querySelector('[name="hue"]');

blurFilter.addEventListener('input', () => {
  imgFrame.style.setProperty('--blur', getFilter(blurFilter));
});

invertFilter.addEventListener('input', () => {
  imgFrame.style.setProperty('--invert', getFilter(invertFilter));
});

sepiaFilter.addEventListener('input', () => {
  imgFrame.style.setProperty('--sepia', getFilter(sepiaFilter));
});

saturateFilter.addEventListener('input', () => {
  imgFrame.style.setProperty('--saturate', getFilter(saturateFilter));
});

hueFilter.addEventListener('input', () => {
  imgFrame.style.setProperty('--hue-rotate', getFilter(hueFilter));
});

// Reset

import { pressReset } from './assets/module/reset.js';

const resetButton = document.querySelector('.btn-reset');

resetButton.addEventListener('click', () => {
  for (let value of labelFields) {
    pressReset(value);
    imgFrame.style.removeProperty('--blur');
    imgFrame.style.removeProperty('--invert');
    imgFrame.style.removeProperty('--sepia');
    imgFrame.style.removeProperty('--saturate');
    imgFrame.style.removeProperty('--hue-rotate');
  }
});

// Load Image

import { onFileSelected } from './assets/module/reader.js';

const inputFile = document.querySelector('.btn-load-input');

inputFile.addEventListener('change', (e) => {
  onFileSelected(e, imgFrame);
});

// Set Image, Save Image

let counter = 0;
/* const btnSaveImage = document.querySelector('.btn-save'); */

import { setImage } from './assets/module/images.js';
import { downloadImage } from './assets/module/save.js';

document.addEventListener('DOMContentLoaded', () => {
  /*  setImage(counter); */
  downloadImage(imgFrame);
});

/* btnSaveImage.addEventListener('click', () => {
  downloadImage(imgFrame);
}); */

const nextButton = document.querySelector('.btn-next');

nextButton.addEventListener('click', () => {
  counter++;
  setImage(counter);
});
