var ListNode = /** @class */ (function () {
    function ListNode(value, next) {
        if (next === void 0) { next = null; }
        this.value = value;
        this.next = next;
    }
    return ListNode;
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
    return LinkedList;
}());
var myLinkedList = new LinkedList(10);
myLinkedList.append(20);
myLinkedList.prepend(50);
myLinkedList.append(60);
myLinkedList.insert(3, 30);
myLinkedList.printList();
myLinkedList.remove(4);
myLinkedList.printList();
console.log(myLinkedList.tail);
