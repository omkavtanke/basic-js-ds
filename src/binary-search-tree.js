const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
	constructor() {
		this.Root = null;
	}

	root() {
		// throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
		return this.Root
	}

	add(data) {
		// throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
		let newNode = new Node(data)

		if (this.Root === null) {
			this.Root = newNode;
		} else {
			this.addWithIn(this.Root, newNode);
		}
	}
	addWithIn(node, newNode) {
		if (newNode.data < node.data) {
			if (node.left === null) {
				node.left = newNode;
			} else {
				this.addWithIn(node.left, newNode);
			}
		} else {
			if (node.right === null) {
				node.right = newNode;
			} else {
				this.addWithIn(node.right, newNode)
			}
		}
	}



	has(data) {
		// throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
		return searchWithIn(this.Root, data)

		function searchWithIn(node, data) {
			if (node === null) {
				return false
			} else if (data < node.data) {
				return searchWithIn(node.left, data)
			} else if (data > node.data) {
				return searchWithIn(node.right, data)
			} else {
				return true;
			}

		}
	}

	find(data) {
		// throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
		return searchWithIn(this.Root, data)

		function searchWithIn(node, data) {
			if (node === null) {
				return null
			} else if (data < node.data) {
				return searchWithIn(node.left, data)
			} else if (data > node.data) {
				return searchWithIn(node.right, data)
			} else {
				return node;
			}
		}
	}
	remove(data) {
		// throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
		// return removeNode(this.Root, data);
		this.Root = this.removeNode(this.Root, data)
	}
	minNode(node) {
		if (node.left === null)
			return node
		else
			return this.minNode(node.left);

	}
	removeNode(node, data) {
		if (node === null) {
			return null
		} else if (data < node.data) {
			node.left = this.removeNode(node.left, data);
			return node;
		} else if (data > node.data) {
			node.right = this.removeNode(node.right, data);
			return node;
		} else {
			if (node.left === null && node.right === null) {
				node = null;
				return node
			}
		}

		if (node.left === null) {
			node = node.right;
			return node
		} else if (node.rigth === null) {
			node = node.left
			return node
		}


		let newNode = this.minNode(node.right);
		node.data = newNode.data;
		node.right = this.removeNode(node.right, node.data);
		return node
	}


	min() {
		// throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here 
		return minNodes(this.Root)
		// if (!node) {
		// 	return null;
		// }

		// while (node.left) {
		// 	node = node.left
		// }
		// return node.value
		function minNodes(node) {
			if (node.left === null)
				return node.data
			else
				return minNodes(node.left);

		}
	}


	max() {
		// throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
		return minNoder(this.Root)

		function minNoder(node) {
			if (node.right === null)
				return node.data
			else
				return minNoder(node.right);

		}
	}
}

module.exports = {
	BinarySearchTree
};