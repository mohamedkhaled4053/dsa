var ListNode = /** @class */ (function () {
    function ListNode(value, next) {
        if (next === void 0) { next = null; }
        this.value = value;
        this.next = next;
    }
    return ListNode;
}());
var DoublyListNode = /** @class */ (function () {
    function DoublyListNode(value, next, prev) {
        if (next === void 0) { next = null; }
        if (prev === void 0) { prev = null; }
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
    return DoublyListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList(value) {
        this.head = new ListNode(value);
        this.tail = this.head;
        this.length = 1;
    }
    LinkedList.prototype.append = function (value) {
        var newNode = new ListNode(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    };
    LinkedList.prototype.prepend = function (value) {
        var newNode = new ListNode(value, this.head);
        this.head = newNode;
        this.length++;
    };
    LinkedList.prototype.printList = function () {
        var list = [];
        var currentNode = this.head;
        while (currentNode !== null) {
            list.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(list);
    };
    LinkedList.prototype.goToIndex = function (index) {
        if (index === 0)
            return this.head;
        if (index === this.length - 1)
            return this.tail;
        var currentNode = this.head;
        for (var i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }
        return currentNode;
    };
    LinkedList.prototype.insert = function (index, value) {
        if (index === 0)
            return this.prepend(value);
        if (index === this.length)
            return this.append(value);
        if (index < 0 || index > this.length)
            return console.log("invalid index");
        var prevNode = this.goToIndex(index - 1);
        var nextNode = prevNode.next;
        var newNode = new ListNode(value, nextNode);
        prevNode.next = newNode;
        this.length++;
    };
    LinkedList.prototype.remove = function (index) {
        if (index === 0) {
            if (this.length === 1)
                return console.log("there is only one element");
            var newHead = this.head.next;
            this.head = newHead;
            this.length--;
            return;
        }
        if (index < 0 || index >= this.length)
            return console.log("invalid index");
        var prevNode = this.goToIndex(index - 1);
        var nextNode = prevNode.next.next;
        prevNode.next = nextNode;
        if (nextNode === null)
            this.tail = prevNode;
        this.length--;
    };
    // the space complexity is o(n) for this and can work as it is for both singly and doubly linked list
    // reverse() {
    //   let reversedLinkedList = new LinkedList(this.head.value);
    //   let currentNode = this.head.next;
    //   while (currentNode !== null) {
    //     reversedLinkedList.prepend(currentNode.value);
    //     currentNode = currentNode.next;
    //   }
    //   this.head = reversedLinkedList.head;
    //   this.tail = reversedLinkedList.tail;
    // }
    // same time complexity but better space complexity
    LinkedList.prototype.reverse = function () {
        if (this.length === 1)
            return this;
        var first = this.head;
        var second = first.next;
        this.head.next = null;
        while (second) {
            var tmp = second.next;
            second.next = first;
            first = second;
            second = tmp;
        }
        this.tail = this.head;
        this.head = first;
    };
    return LinkedList;
}());
var DoublyLinkedList = /** @class */ (function () {
    function DoublyLinkedList(value) {
        this.head = new DoublyListNode(value);
        this.tail = this.head;
        this.length = 1;
    }
    DoublyLinkedList.prototype.append = function (value) {
        var newNode = new DoublyListNode(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    };
    DoublyLinkedList.prototype.prepend = function (value) {
        var newNode = new DoublyListNode(value, this.head);
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
    };
    DoublyLinkedList.prototype.printList = function () {
        var list = [];
        var currentNode = this.head;
        while (currentNode !== null) {
            list.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(list);
    };
    DoublyLinkedList.prototype.goToIndex = function (index) {
        if (index === 0)
            return this.head;
        if (index === this.length - 1)
            return this.tail;
        var currentNode;
        if (index < this.length / 2) {
            currentNode = this.head;
            for (var i = 0; i < index; i++) {
                currentNode = currentNode.next;
            }
        }
        else {
            currentNode = this.tail;
            for (var i = this.length - 1; i > index; i--) {
                currentNode = currentNode.prev;
            }
        }
        return currentNode;
    };
    DoublyLinkedList.prototype.insert = function (index, value) {
        if (index === 0)
            return this.prepend(value);
        if (index === this.length)
            return this.append(value);
        if (index < 0 || index > this.length)
            return console.log("invalid index");
        var prevNode = this.goToIndex(index - 1);
        var nextNode = prevNode.next;
        var newNode = new DoublyListNode(value, nextNode, prevNode);
        prevNode.next = newNode;
        nextNode.prev = newNode;
        this.length++;
    };
    DoublyLinkedList.prototype.remove = function (index) {
        if (this.length === 1)
            return console.log("there is only one element");
        if (index === 0) {
            var newHead = this.head.next;
            newHead.prev = null;
            this.head = newHead;
            this.length--;
            return;
        }
        if (index === this.length - 1) {
            var newTail = this.tail.prev;
            newTail.next = null;
            this.tail = newTail;
            this.length--;
            return;
        }
        if (index < 0 || index >= this.length)
            return console.log("invalid index");
        var prevNode = this.goToIndex(index - 1);
        var nextNode = prevNode.next.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        this.length--;
    };
    DoublyLinkedList.prototype.reverse = function () {
        if (this.length === 1)
            return this;
        var first = this.head;
        var second = first.next;
        this.head.next = null;
        this.tail.prev = null;
        while (second) {
            var tmp = second.next;
            second.next = first;
            first.prev = second;
            first = second;
            second = tmp;
        }
        this.tail = this.head;
        this.head = first;
    };
    return DoublyLinkedList;
}());
var myLinkedList = new DoublyLinkedList(0);
myLinkedList.append(10);
myLinkedList.prepend(-10);
myLinkedList.append(20);
myLinkedList.append(30);
myLinkedList.insert(3, "index 3");
// myLinkedList.printList();
// myLinkedList.remove(6);
// myLinkedList.printList();
// console.log(myLinkedList.goToIndex(0).value);
// console.log(myLinkedList.goToIndex(1).value);
// console.log(myLinkedList.goToIndex(2).value);
// console.log(myLinkedList.goToIndex(3).value);
// console.log(myLinkedList.goToIndex(4).value);
myLinkedList.printList();
myLinkedList.reverse();
myLinkedList.printList();
