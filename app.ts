// the commented lines are how they do it with static arrays

class Stack {
  stack: any[];
  // top: number;
  constructor() {
    this.stack = [];
    // this.top = 0;
  }
  peek() {
    return this.stack[this.stack.length - 1];
    // return this.stack[this.stack[this.top - 1]];
  }
  push(value: any) {
    this.stack.push(value);
    // this.stack[this.top] = value;
    // this.top++;
  }
  pop() {
    return this.stack.pop();
    // this.top--;
    // let temp = this.stack[this.top];
    // this.stack[this.top] = null;
    // return temp;
  }
}

const myStack = new Stack();

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
