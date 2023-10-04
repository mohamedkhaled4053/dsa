var HashTable = /** @class */ (function () {
    function HashTable(size) {
        this.data = new Array(size);
    }
    HashTable.prototype.set = function (key, value) {
        var address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [[key, value]];
        }
        else {
            // if the key exists replace it with the new value
            for (var i in this.data[address]) {
                if (this.data[address][i][0] === key) {
                    this.data[address][i] = [key, value];
                    return;
                }
            }
            this.data[address].push([key, value]);
        }
    };
    HashTable.prototype.get = function (key) {
        var address = this._hash(key);
        var addressData = this.data[address];
        if (addressData) {
            for (var _i = 0, addressData_1 = addressData; _i < addressData_1.length; _i++) {
                var keyValue = addressData_1[_i];
                if (keyValue[0] === key)
                    return keyValue[1];
            }
            return "no data";
        }
        else {
            return "no data with that key";
        }
    };
    HashTable.prototype.keys = function () {
        // console.log();
        var keys = [];
        for (var _i = 0, _a = this.data; _i < _a.length; _i++) {
            var address = _a[_i];
            if (!address)
                continue;
            for (var _b = 0, address_1 = address; _b < address_1.length; _b++) {
                var keyValue = address_1[_b];
                keys.push(keyValue[0]);
            }
        }
        return keys;
    };
    HashTable.prototype._hash = function (key) {
        var hash = 0;
        for (var i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    };
    return HashTable;
}());
var myHashTable = new HashTable(2);
myHashTable.set("grapes", 10000);
myHashTable.set("grapes", 17);
console.log(myHashTable.get("grapes"));
myHashTable.set("apples", 9);
myHashTable.set("orange", 45);
console.log(myHashTable.get("apples"));
myHashTable.keys();
