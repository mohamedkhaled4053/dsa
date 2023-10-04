class HashTable {
  data: [string, number][][];
  constructor(size: number) {
    this.data = new Array(size);
  }

  set(key: string, value: any) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [[key, value]];
    } else {
      // if the key exists replace it with the new value
      for (const i in this.data[address]) {
        if (this.data[address][i][0] === key) {
          this.data[address][i] = [key, value];
          return;
        }
      }
      this.data[address].push([key, value]);
    }
  }

  get(key: string) {
    let address = this._hash(key);
    let addressData = this.data[address];

    if (addressData) {
      for (const keyValue of addressData) {
        if (keyValue[0] === key) return keyValue[1];
      }
      return "no data";
    } else {
      return "no data with that key";
    }
  }

  keys() {
    // console.log();
    let keys: string[] = [];
    for (const address of this.data) {
      if (!address) continue;
      for (const keyValue of address) {
        keys.push(keyValue[0]);
      }
    }

    return keys;
  }

  _hash(key: string) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
}

const myHashTable = new HashTable(2);
myHashTable.set("grapes", 10000);
myHashTable.set("grapes", 17);
console.log(myHashTable.get("grapes"));

myHashTable.set("apples", 9);
myHashTable.set("orange", 45);
console.log(myHashTable.get("apples"));

myHashTable.keys();
