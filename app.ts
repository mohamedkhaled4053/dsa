class ListNode {
  constructor(public value: any, public next: ListNode | null = null) {}
}

class DoublyListNode {
  constructor(
    public value: any,
    public next: DoublyListNode | null = null,
    public prev: DoublyListNode | null = null
  ) {}
}

class LinkedList {
  head: ListNode;
  tail: ListNode;
  length: number;
  constructor(value: any) {
    this.head = new ListNode(value);
    this.tail = this.head;
    this.length = 1;
  }
  append(value: any) {
    let newNode = new ListNode(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  prepend(value: any) {
    let newNode = new ListNode(value, this.head);
    this.head = newNode;
    this.length++;
  }

  printList() {
    let list: any[] = [];
    let currentNode: ListNode | null = this.head;
    while (currentNode !== null) {
      list.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(list);
  }

  goToIndex(index: number) {
    if (index === 0) return this.head;
    if (index === this.length - 1) return this.tail;
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next!;
    }
    return currentNode;
  }

  insert(index: number, value: any) {
    if (index === 0) return this.prepend(value);
    if (index === this.length) return this.append(value);
    if (index < 0 || index > this.length) return console.log("invalid index");

    let prevNode = this.goToIndex(index - 1);
    let nextNode = prevNode.next;
    let newNode = new ListNode(value, nextNode);
    prevNode.next = newNode;

    this.length++;
  }

  remove(index: number) {
    if (index === 0) {
      if (this.length === 1) return console.log("there is only one element");
      let newHead = this.head.next;
      this.head = newHead!;
      this.length--;
      return;
    }

    if (index < 0 || index >= this.length) return console.log("invalid index");

    let prevNode = this.goToIndex(index - 1);
    let nextNode = prevNode.next!.next;

    prevNode.next = nextNode;
    if (nextNode === null) this.tail = prevNode;
    this.length--;
  }

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
  reverse() {
    if (this.length === 1) return this;

    let first = this.head;
    let second = first.next;
    this.head.next = null;
    while (second) {
      let tmp = second.next;
      second.next = first;
      first = second;
      second = tmp;
    }
    this.tail = this.head;
    this.head = first;
  }
}

class DoublyLinkedList {
  head: DoublyListNode;
  tail: DoublyListNode;
  length: number;
  constructor(value: any) {
    this.head = new DoublyListNode(value);
    this.tail = this.head;
    this.length = 1;
  }
  append(value: any) {
    let newNode = new DoublyListNode(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  prepend(value: any) {
    let newNode = new DoublyListNode(value, this.head);
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
  }

  printList() {
    let list: any[] = [];
    let currentNode: DoublyListNode | null = this.head;
    while (currentNode !== null) {
      list.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(list);
  }

  goToIndex(index: number) {
    if (index === 0) return this.head;
    if (index === this.length - 1) return this.tail;

    let currentNode: DoublyListNode;
    if (index < this.length / 2) {
      currentNode = this.head;

      for (let i = 0; i < index; i++) {
        currentNode = currentNode.next!;
      }
    } else {
      currentNode = this.tail;

      for (let i = this.length - 1; i > index; i--) {
        currentNode = currentNode.prev!;
      }
    }
    return currentNode;
  }

  insert(index: number, value: any) {
    if (index === 0) return this.prepend(value);
    if (index === this.length) return this.append(value);
    if (index < 0 || index > this.length) return console.log("invalid index");

    let prevNode = this.goToIndex(index - 1);
    let nextNode = prevNode.next;
    let newNode = new DoublyListNode(value, nextNode, prevNode);
    prevNode.next = newNode;
    nextNode!.prev = newNode;

    this.length++;
  }

  remove(index: number) {
    if (this.length === 1) return console.log("there is only one element");
    if (index === 0) {
      let newHead = this.head.next;
      newHead!.prev = null;
      this.head = newHead!;
      this.length--;
      return;
    }

    if (index === this.length - 1) {
      let newTail = this.tail.prev;
      newTail!.next = null;
      this.tail = newTail!;
      this.length--;
      return;
    }

    if (index < 0 || index >= this.length) return console.log("invalid index");

    let prevNode = this.goToIndex(index - 1);
    let nextNode = prevNode.next!.next;

    prevNode.next = nextNode;
    nextNode!.prev = prevNode;
    this.length--;
  }

  reverse() {
    if (this.length === 1) return this;

    let first = this.head;
    let second = first.next;
    this.head.next = null;
    this.tail.prev = null;
    while (second) {
      let tmp = second.next;
      second.next = first;
      first.prev = second;
      first = second;
      second = tmp;
    }
    this.tail = this.head;
    this.head = first;
  }
}

let myLinkedList = new DoublyLinkedList(0);

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
