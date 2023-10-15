class TreeNode {
  constructor(
    public value: any,
    public left: TreeNode | null = null,
    public right: TreeNode | null = null ,
    public frequency: number = 1 ,
  ) {}
}

class BinarySearchTree {
  root: TreeNode | null;
  constructor() {
    this.root = null;
  }

  findTargetNode(value: any) {
    if (!this.root) return { currentNode: null, prevNode: null };
    let currentNode: TreeNode = this.root;
    let prevNode: TreeNode | null = null;
    while (
      (currentNode.left && value < currentNode.value) ||
      (currentNode.right && value > currentNode.value)
    ) {
      prevNode = currentNode;
      if (value < currentNode.value) {
        currentNode = currentNode.left!;
      } else {
        currentNode = currentNode.right!;
      }
    }
    return { currentNode, prevNode };
  }

  insert(value: any) {
    let newNode = new TreeNode(value);
    let { currentNode } = this.findTargetNode(value);
    if (!currentNode) return (this.root = newNode);

    if (value < currentNode.value) currentNode.left = newNode;
    if (value > currentNode.value) currentNode.right = newNode;
    if (value === currentNode.value) currentNode.frequency ++;
  }

  lookup(value: any) {
    let { currentNode } = this.findTargetNode(value);
    if (!currentNode) return null;

    return value === currentNode.value ? currentNode : null;
  }
  remove(value: any) {
    let { currentNode, prevNode } = this.findTargetNode(value);
    if (!currentNode) return false;

    // if frequency
    if(currentNode.frequency > 1) return currentNode.frequency --

    // if leaf
    if (!currentNode.left && !currentNode.right) {
      if (currentNode === this.root || prevNode === null)
        return (this.root = null);

      if (value < prevNode.value) return (prevNode.left = null);
      if (value > prevNode.value) return (prevNode.right = null);
    }

    // if has one child
    if (!currentNode.right || !currentNode.left) {
      if (currentNode === this.root || prevNode === null)
        return (this.root = this.root!.left || this.root!.right);

      if (value < prevNode.value)
        return (prevNode.left = currentNode.left || currentNode.right);
      if (value > prevNode.value)
        return (prevNode.right = currentNode.left || currentNode.right);
    }

    // now it definitely has two childs
    let successor = currentNode.right!;
    while (successor.left) {
      successor = successor.left;
    }
    this.remove(successor.value);
    currentNode.value = successor.value;
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
// tree.insert(1);

tree.remove(1);
// tree.remove(6);
// tree.remove(15);
// tree.remove(170);
// tree.remove(4);
// tree.remove(20);
// tree.remove(9);
console.log(tree.root);

//     9
//  4     20
//1  6  15  170

// console.log(traverse(tree.root));

// function traverse(node: any) {
//   const tree = { value: node.value };
//   //@ts-ignore
//   tree.left = node.left === null ? null : traverse(node.left);
//   //@ts-ignore
//   tree.right = node.right === null ? null : traverse(node.right);
//   return tree;
// }
