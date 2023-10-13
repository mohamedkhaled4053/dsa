var ListNode = /** @class */ (function () {
    function ListNode(value, next) {
        if (next === void 0) { next = null; }
        this.value = value;
        this.next = next;
    }
    return ListNode;
}());
var Queue = /** @class */ (function () {
    function Queue() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    Queue.prototype.peek = function () {
        return this.first;
    };
    Queue.prototype.enqueue = function (value) {
        var newNode = new ListNode(value);
        if (!this.last) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
    };
    Queue.prototype.dequeue = function () {
        if (!this.first)
            return;
        if (this.length === 1)
            this.last = null;
        this.first = this.first.next;
        this.length--;
    };
    return Queue;
}());
var myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.dequeue();
myQueue.dequeue();
// myQueue.dequeue();
console.log(myQueue);
//Joy
//Matt
//Pavel
//Samir
