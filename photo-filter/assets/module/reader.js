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
