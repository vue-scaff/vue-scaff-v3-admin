function recursive(target = [], callback = () => {}, condition = 'children') {
  this.result = this.result || [];

  if (!condition) {
    return target;
  }

  for (let item of target) {
    if (item[condition]) {
      recursive.call(this, item[condition], callback, condition);
    }
    this.result.push(callback(item));
  }

  return this.result;
}

export default recursive;
