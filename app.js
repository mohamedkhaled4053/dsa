// the commented lines are how they do it with static arrays
var Stack = /** @class */ (function () {
    // top: number;
    function Stack() {
        this.stack = [];
        // this.top = 0;
    }
    Stack.prototype.peek = function () {
        return this.stack[this.stack.length - 1];
        // return this.stack[this.stack[this.top - 1]];
    };
    Stack.prototype.push = function (value) {
        this.stack.push(value);
        // this.stack[this.top] = value;
        // this.top++;
    };
    Stack.prototype.pop = function () {
        return this.stack.pop();
        // this.top--;
        // let temp = this.stack[this.top];
        // this.stack[this.top] = null;
        // return temp;
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
console.log(myStack.peek());
myStack.pop();
myStack.pop();
myStack.pop();
myStack.pop();
myStack.pop();
console.log(myStack);
