var ListNode = /** @class */ (function () {
    function ListNode(value, next) {
        if (next === void 0) { next = null; }
        this.value = value;
        this.next = next;
    }
    return ListNode;
}());
var Stack = /** @class */ (function () {
    function Stack() {
        this.top = null;
        this.length = 0;
    }
    Stack.prototype.peek = function () {
        return this.top;
    };
    Stack.prototype.push = function (value) {
        var newNode = new ListNode(value, this.top);
        this.top = newNode;
        this.length++;
    };
    Stack.prototype.pop = function () {
        var _a;
        if (this.isEmpty())
            return "stack is empty";
        var value = (_a = this.top) === null || _a === void 0 ? void 0 : _a.value;
        this.top = this.top.next;
        this.length--;
        return value;
    };
    Stack.prototype.isEmpty = function () {
        return this.length === 0;
    };
    return Stack;
}());
var myStack = new Stack();
myStack.push(0);
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
console.log(myStack);
myStack.pop();
myStack.pop();
myStack.pop();
myStack.pop();
myStack.pop();
console.log(myStack);
