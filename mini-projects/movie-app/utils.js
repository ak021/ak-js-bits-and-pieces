export const debounce = (func, timeout = 500) => {
  let timeoutId = null;
  return (...args) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, timeout);
  };
};
