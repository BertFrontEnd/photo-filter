const downloadImage = (image) => {
  const canvas = document.querySelector('canvas');
  const btnSaveImage = document.querySelector('.btn-save');

  function getFilter() {
    let filters = '';
    let imageFilters = image.style.cssText;

    /* console.log(imageFilters); */

    const multiplyBlur = () => {
      let arr = imageFilters.split(';');

      let arrBlur = arr.map((elem) => {
        if (elem.includes('--blur:') && elem.length === 11) {
          let newBlur = +elem.slice(7, 9);
          return elem.slice(0, 7) + newBlur * 2 + elem.slice(9);
        }

        if (elem.includes('--blur:') && elem.length === 10) {
          let newBlur = +elem.slice(7, 8);
          return elem.slice(0, 7) + newBlur * 2 + elem.slice(8);
        }
      });

      /* console.log(arrBlur.join('') + ';'); */
      return arrBlur.join('') + ';';
    };

    const getBlur = () => {
      let arr = imageFilters.split(';');
      let arrBlur = arr.map((elem) => {
        if (elem.includes('blur:')) {
          return elem;
        }
      });

      /* console.log(arrBlur.join('') + ';'); */
      return arrBlur.join('') + ';';
    };

    let rep = getBlur();

    imageFilters = imageFilters.replace(rep, multiplyBlur());

    /* console.log(imageFilters); */

    for (let i = 0; i < imageFilters.length; i++) {
      if (imageFilters[i] === '-' && imageFilters[i - 1] !== 'e') {
        continue;
      } else {
        switch (imageFilters[i]) {
          case ':':
            filters = filters + '(';
            break;
          case ';':
            filters = filters + ')';
            break;
          default:
            filters = filters + imageFilters[i];
            break;
        }
      }
    }

    /* console.log(filters); */
    return filters;
  }

  function createCanvas(img) {
    const newCanvas = canvas.getContext('2d');
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    newCanvas.filter = getFilter();
    /* console.log(newCanvas.filter); */
    newCanvas.drawImage(img, 0, 0);
  }

  function saveImage() {
    btnSaveImage.addEventListener('click', () => {
      const request = new Promise((resolve, reject) => {
        const img = new Image();
        img.setAttribute('crossOrigin', 'anonymous');
        img.src = image.src;
        img.onload = () => {
          createCanvas(img);
          resolve();
        };
      });

      request.then(function createLink() {
        let link = document.createElement('a');
        link.download = 'image.png';
        link.href = canvas.toDataURL();
        link.click();
        link.delete;
      });
    });
  }

  saveImage();
};

export { downloadImage };
