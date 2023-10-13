class ListNode {
  constructor(public value: any, public next: ListNode | null = null) {}
}

class Stack {
  top: ListNode | null;
  length: number;
  constructor() {
    this.top = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value: any) {
    let newNode = new ListNode(value, this.top);
    this.top = newNode;
    this.length++;
  }
  pop() {
    if (this.isEmpty()) return "stack is empty";
    let value = this.top?.value;
    this.top = this.top!.next;
    this.length--;
    return value;
  }

  isEmpty() {
    return this.length === 0;
  }
}

const myStack = new Stack();

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
