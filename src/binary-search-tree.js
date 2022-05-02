const { NotImplementedError } = require('../extensions/index.js');

//const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
	construstor() {
		this.Root = null;
	}

	root() {
		// throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
		return this.Root
	}

	add(data) {
		//  throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
		this.Root = addWithIn(this.Root, data)

		function addWithIn(node, value) {
			if (!node) {
				return new Node(value)
			}
			if (node.value === value) {
				return node;
			}

			if (value < node.value) {
				node.left = addWithIn(node.left, value)
			} else {
				node.right = addWithIn(node.right, value)
			}
			return node
		}
	}

	has(/* data */) {
		// throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
		this.Root = searchWithIn(this.Root, data)

		function searchWithIn(node, value) {
			if (!node) {
				return false
			}

			if (node.value === value) {
				return true
			}

			return value < node.value ?
				searchWithIn(node.left, value) :
				searchWithIn(node.right, value);


		}
	}

	find(data) {
		// throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
		this.Root = searchWithIn(this.Root, data)

		function searchWithIn(node, value) {
			if (!node) {
				return null
			}

			if (node.value === value) {
				return value
			}

			return value < node.value ?
				searchWithIn(node.left, value) :
				searchWithIn(node.right, value);


		}
	}

	remove(data) {
		// throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
		this.Root = removeNode(this.Root, data);

		function removeNode(node, value) {

			if (!node) {
				return null;
			}

			if (value < node.value) {
				node.left === removeNode(node.left, value)
			} else if (node.valuec < value) {
				Node.right === removeNode(node.right, value)
			} else {
				if (!node.left && !node.right) {
					return null
				}
			}

			if (!node.left) {
				node = node.right;
				return node
			}
			if (!node.right) {
				node = node.right;
				return node
			}


			let minFromRight = node.right;
			while (minFromRight.left) {
				minFromRight = minFromRight.left;
			}
			node.value = minFromRight.value;

			node.right = removeNode(node.right, minFromRight.value)

			return node


		}
	}

	min() {
		// throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here 

		if (!node) {
			return null;
		}

		let node = this.Root;
		while (node.left) {
			node = node.left
		}
		return node.value


	}

	max() {
		// throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
		if (!node) {
			return;
		}

		let node = this.Root;
		while (node.rihgt) {
			node = node.rihgt
		}
		return node.value
	}
}

module.exports = {
	BinarySearchTree
};