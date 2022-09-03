class SortedList {
  constructor(items, length) {
    this.items = []
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => a-b);
    this.length = this.items.length

  }

  get(pos) {
    if (pos > this.items.length - 1){
      throw new Error('OutOfBounds');
    } else {
    return this.items[pos];
  }
}

  max() {
    if (this.items.length > 0) {
      return Math.max(...this.items)
    } else {
throw new Error('EmptySortedList');

  }
}

  min() {
    if (this.items.length > 0) {
      return Math.min(...this.items)
    } else {
throw new Error('EmptySortedList');
  }
}
  

  sum() {
    let sum = 0
    for (let i = 0; i < 
  this.items.length; i += 1) {
    sum += this.items[i];
  }

  avg() {}
}
}


module.exports = SortedList;
