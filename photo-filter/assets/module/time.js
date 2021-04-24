// Get Time
const getTime = () => {
  const hour = new Date().getHours();
  let time = '';

  switch (true) {
    case hour >= 6 && hour < 12: {
      time = 'morning';
      break;
    }
    case hour >= 12 && hour < 18: {
      time = 'day';
      break;
    }
    case hour >= 18 && hour < 24: {
      time = 'evening';
      break;
    }
    case hour >= 0 && hour < 6: {
      time = 'night ';
      break;
    }
  }
  return time;
};

export { getTime };
