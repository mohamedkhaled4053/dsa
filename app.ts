class ListNode {
  constructor(public value: any, public next: ListNode | null = null) {}
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
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(20);
myLinkedList.prepend(50);
myLinkedList.append(60);

myLinkedList.insert(3, 30);
myLinkedList.printList();
myLinkedList.remove(4);
myLinkedList.printList();

console.log(myLinkedList.tail);
