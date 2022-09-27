export default (time = 0, timeout) => {
  return new Promise(resolve => {
    timeout = setTimeout(() => {
      resolve(), clearTimeout(timeout);
    }, time);
  });
};
