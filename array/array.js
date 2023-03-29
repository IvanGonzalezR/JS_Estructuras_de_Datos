// const array = [ 'Diego', 'Kike', 'Jazmin' ];

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[ index ];
  }
  push(item) {
    this.data[ this.length ] = item;
    this.length++;
    return this.data;
  }
  pop() {
    if (this.data.length > 0) {
      const lastItem = this.data[ this.length - 1 ];
      delete this.data[ this.length - 1 ];
      this.length--;
      return lastItem;
    }
    return this.data;
  }
  delete(index) {
    const item = this.data[ index ];
    if (item) {
      this.shiftIndex(index);
      return item;
    } else {
      return console.log('No encontrado');
    }
  }
  shift() {
    return this.delete(0)
  }
  unshift(item) {
    for (let i = this.length; i >= 0; i--) {
      this.data[ i ] = this.data[ i - 1 ];
    }
    this.data[ 0 ] = item;
    this.length++;
    return this.data;
  }
  shiftIndex(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[ i ] = this.data[ i + 1 ];
    }
    delete this.data[ this.length - 1 ];
    this.length--;
  }
}

const myArray = new MyArray();
myArray.push('Kike');
myArray.push('Jazz');
myArray.push('David');

