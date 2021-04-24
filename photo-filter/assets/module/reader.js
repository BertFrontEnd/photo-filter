const onFileSelected = (e) => {
  var selectedFile = e.target.files[0];
  var reader = new FileReader();

  var imgFile = document.querySelector('img');
  imgFile.title = selectedFile.name;

  reader.onload = (e) => {
    imgFile.src = e.target.result;
  };

  reader.readAsDataURL(selectedFile);
};

export { onFileSelected };
