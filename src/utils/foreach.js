export default (target = {}, callback = () => {}) => {
  // Set Group
  const group = {};

  // Set Count
  let count = 0;

  // Loop
  Object.keys(target).every(key => {
    // Get Result from Callback
    const result = callback(target[key], key, count++);

    // Stop
    if (result === false) {
      return result;
    }

    // Reset Target
    group[key] = result;

    // Next
    return true;
  });

  // Export
  return group;
};
