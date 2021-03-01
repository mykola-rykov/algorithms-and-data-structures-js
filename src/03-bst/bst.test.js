import { assert } from "chai";
import BinarySearchTreeNode from './bst';

describe('BinarySearchTree', () => {
    it('should have methods to insert node to a BST and to find it', () => {
        const root = new BinarySearchTreeNode();

        assert.isNull(root.value);

        root.insert(2);
        root.insert(2);
        root.insert(1);
        root.insert(3);
        root.insert(3);
        root.insert(5);
        root.insert(12);
        root.insert(12);
        root.insert(12);
        root.insert(7);
        root.insert(4);
        root.insert(0);
        root.insert(93);

        assert.equal(root.value, 2);
        assert.equal(root.left.value, 1);
        assert.equal(root.right.value, 3);
        assert.equal(root.right.right.value, 5);

        let foundNode = root.find(93);
        assert.equal(foundNode.value, 93);

        assert.isNull(root.find(190));
    });
});
