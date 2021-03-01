class BinarySearchTreeNode {
    constructor(value = null) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value) {
        if (this.value === null) {
            this.value = value;
            return this;
        }

        if (value < this.value) {
            if (this.left) {
                return this.left.insert(value);
            }

            this.left = new BinarySearchTreeNode(value);
            return this.left;
        }

        if (value > this.value) {
            if (this.right) {
                return this.right.insert(value);
            }

            this.right = new BinarySearchTreeNode(value);
            return this.right;
        }

        return this;
    }

    find(value) {
        if (this.value === value) {
            return this;
        }

        if (value < this.value) {
            if (this.left) {
                return this.left.find(value);
            } else {
                return null;
            }
        }

        if (value > this.value) {
            if (this.right) {
                return this.right.find(value);
            } else {
                return null;
            }
        }

        return null;
    }
}

export default BinarySearchTreeNode;
