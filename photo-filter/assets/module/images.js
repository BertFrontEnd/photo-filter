import { getTime } from './time.js';
import { getArray } from './utilities.js';

const imageArray = getArray().map((element) => {
  return (element = element < 10 ? `0${element}` : element.toString());
});

const timeOfDayObject = {
  night: imageArray,
  morning: imageArray,
  day: imageArray,
  evening: imageArray,
};

const setImage = (count) => {
  let folder = getTime();
  let imageNumber = count % 20;
  let img = document.querySelector('img');
  let src = `./assets/images/${folder}/${timeOfDayObject[folder][imageNumber]}.jpg`;
  img.src = src;
};

export { setImage };
