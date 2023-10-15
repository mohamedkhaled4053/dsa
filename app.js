var TreeNode = /** @class */ (function () {
    function TreeNode(value, left, right, frequency) {
        if (left === void 0) { left = null; }
        if (right === void 0) { right = null; }
        if (frequency === void 0) { frequency = 1; }
        this.value = value;
        this.left = left;
        this.right = right;
        this.frequency = frequency;
    }
    return TreeNode;
}());
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree() {
        this.root = null;
    }
    BinarySearchTree.prototype.findTargetNode = function (value) {
        if (!this.root)
            return { currentNode: null, prevNode: null };
        var currentNode = this.root;
        var prevNode = null;
        while ((currentNode.left && value < currentNode.value) ||
            (currentNode.right && value > currentNode.value)) {
            prevNode = currentNode;
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            }
            else {
                currentNode = currentNode.right;
            }
        }
        return { currentNode: currentNode, prevNode: prevNode };
    };
    BinarySearchTree.prototype.insert = function (value) {
        var newNode = new TreeNode(value);
        var currentNode = this.findTargetNode(value).currentNode;
        if (!currentNode)
            return (this.root = newNode);
        if (value < currentNode.value)
            currentNode.left = newNode;
        if (value > currentNode.value)
            currentNode.right = newNode;
        if (value === currentNode.value)
            currentNode.frequency++;
    };
    BinarySearchTree.prototype.lookup = function (value) {
        var currentNode = this.findTargetNode(value).currentNode;
        if (!currentNode)
            return null;
        return value === currentNode.value ? currentNode : null;
    };
    BinarySearchTree.prototype.remove = function (value) {
        var _a = this.findTargetNode(value), currentNode = _a.currentNode, prevNode = _a.prevNode;
        if (!currentNode)
            return false;
        // if frequency
        if (currentNode.frequency > 1)
            return currentNode.frequency--;
        // if leaf
        if (!currentNode.left && !currentNode.right) {
            if (currentNode === this.root || prevNode === null)
                return (this.root = null);
            if (value < prevNode.value)
                return (prevNode.left = null);
            if (value > prevNode.value)
                return (prevNode.right = null);
        }
        // if has one child
        if (!currentNode.right || !currentNode.left) {
            if (currentNode === this.root || prevNode === null)
                return (this.root = this.root.left || this.root.right);
            if (value < prevNode.value)
                return (prevNode.left = currentNode.left || currentNode.right);
            if (value > prevNode.value)
                return (prevNode.right = currentNode.left || currentNode.right);
        }
        // now it definitely has two childs
        var successor = currentNode.right;
        while (successor.left) {
            successor = successor.left;
        }
        this.remove(successor.value);
        currentNode.value = successor.value;
    };
    return BinarySearchTree;
}());
var tree = new BinarySearchTree();
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
