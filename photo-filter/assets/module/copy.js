const copyToClipboard = () => {
  const copyText = document.querySelector('.filter-arguments');
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand('copy');
};

export { copyToClipboard };
