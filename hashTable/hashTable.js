class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  hashMethod(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  set(key, value) {
    const address = this.hashMethod(key);
    if (!this.data[ address ]) {
      this.data[ address ] = [];
    }
    this.data[ address ].push([ key, value ]);
    return this.data;
  }
  get(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[ address ];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[ i ][ 0 ] === key) {// 0 es el indice 
          return currentBucket[ i ][ 1 ]; // 1 es el value
        }
      }
    }
    return undefined;
  }
  getAllKeys() {
    const keys = [];
    this.data.forEach(element => {
      for (let i = 0; i < element.length; i++) {
        keys.push(element[ i ][ 0 ])
      }
    });
    return keys
  }
  delete(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[ address ];
    let value = [];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[ i ][ 0 ] === key) {// 0 es el indice 
          value = currentBucket[ i ];
          delete currentBucket[ i ];
          return value;
        }
      }
    }
    return undefined;
  }
}

const myHashTable = new HashTable(50);
const myHashTable2 = new HashTable(10);
myHashTable2.set('kike', 22);
myHashTable2.set('kike2', 23);
myHashTable2.set('kike3', 24);
console.log(
  myHashTable2.getAllKeys()
);