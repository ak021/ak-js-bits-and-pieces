const throttle = (func, delay) => {
  let prev = 0;
  return (...args) => {
    const now = new Date().getTime();
    if (now - prev > delay) {
      prev = now;
      func(...args);
    }
  };
};
