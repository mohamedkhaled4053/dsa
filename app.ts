class ListNode {
  constructor(public value: any, public next: ListNode | null = null) {}
}

class Queue {
  first: ListNode | null;
  last: ListNode | null;
  length: number;
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value: any) {
    let newNode = new ListNode(value);
    if (!this.last) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
  }
  dequeue() {
    if (!this.first) return;
    if (this.length === 1) this.last = null;
    this.first = this.first.next;
    this.length--;
  }
}

const myQueue = new Queue();

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
