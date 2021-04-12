const activateFullscreen = () => {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  }
};

const deactivateFullscreen = () => {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  }
};

export { activateFullscreen, deactivateFullscreen };
