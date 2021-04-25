const downloadImage = (image) => {
  const canvas = document.querySelector('canvas');
  const btnSaveImage = document.querySelector('.btn-save');

  function getFilter() {
    let filters = '';
    let imageFilters = image.style.cssText;

    /* if (imageFilters.slice(0, 6) === '--blur') {
      let newBlur = +imageFilters.slice(7, 9);
      imageFilters =
        imageFilters.slice(0, 7) + newBlur * 2 + imageFilters.slice(9);
      console.log(imageFilters);
      return imageFilters;
    }
 */
    console.log(imageFilters);

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
    return filters;
  }

  function createCanvas(img) {
    const newCanvas = canvas.getContext('2d');
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    newCanvas.filter = getFilter();
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
