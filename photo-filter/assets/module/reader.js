const onFileSelected = (e, img) => {
  var selectedFile = e.target.files[0];
  var reader = new FileReader();

  var img = document.querySelector('img');
  img.title = selectedFile.name;

  reader.onload = (e) => {
    img.src = e.target.result;
  };

  reader.readAsDataURL(selectedFile);

  e.target.value = '';
};

export { onFileSelected };

/* const onFileSelected = (e, img, element) => {
  const selectedFile = element.files[0];
  const reader = new FileReader();

  img.title = selectedFile.name;

  reader.onload = () => {
    img.src = reader.result;
  };

  reader.readAsDataURL(selectedFile);
  e.target.value = '';
};

export { onFileSelected }; */
