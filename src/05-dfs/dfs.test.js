import { assert } from "chai";
import { dfsPreOrder, dfsPostOrder, dfsInOrder } from './dfs';

class TreeNode {
    constructor(value = null, children = []) {
        this.value = value;
        this.children = children;
    }
}

describe('DFS', () => {
    it('should traverse a tree in a Depth First, Pre Order way', () => {
        const root = new TreeNode(42, [
            new TreeNode(98, [
                new TreeNode(6, [new TreeNode(98723, [])]),
                new TreeNode(1024, []),
                new TreeNode(15, []),
            ]),
            new TreeNode(17, [
                new TreeNode(1098, []),
                new TreeNode(107, [new TreeNode(18, [])]),
            ]),
        ]);
        const dfsPreOrderFlattenedTree = [
            42,
            98,
            6,
            98723,
            1024,
            15,
            17,
            1098,
            107,
            18,
        ];
        assert.sameOrderedMembers(dfsPreOrder(root), dfsPreOrderFlattenedTree);
    });

    it('should traverse a tree in a Depth First, Post Order way', () => {
        const root = new TreeNode(42, [
            new TreeNode(98, [
                new TreeNode(6, [new TreeNode(98723, [])]),
                new TreeNode(1024, []),
                new TreeNode(15, []),
            ]),
            new TreeNode(17, [
                new TreeNode(1098, []),
                new TreeNode(107, [new TreeNode(18, [])]),
            ]),
        ]);
        const dfsPostOrderFlattenedTree = [
            98723,
            6,
            1024,
            15,
            98,
            1098,
            18,
            107,
            17,
            42,
        ];
        assert.sameOrderedMembers(dfsPostOrder(root), dfsPostOrderFlattenedTree);
    });

    it('should traverse a tree in a Depth First, In Order way', () => {
        // In Order traversal is based on the assumption that the children nodes can be divided in two groups.
        // It's handy for Binary Search Trees (BST) as applying In-Order DFS to them
        // returns a sorted list of BST values!
        class BinaryTreeNode {
            constructor(value = null, left = null, right = null) {
                this.value = value;
                this.left = left;
                this.right = right;
            }
        }

        const root = new BinaryTreeNode(
            747,
            new BinaryTreeNode(
                138,
                new BinaryTreeNode(69),
                new BinaryTreeNode(112)
            ),
            new BinaryTreeNode(
                812,
                new BinaryTreeNode(
                    799,
                    new BinaryTreeNode(789, null, new BinaryTreeNode(803))
                ),
                new BinaryTreeNode(90132)
            )
        );
        const dfsInOrderFlattenedTree = [
            69,
            138,
            112,
            747,
            789,
            803,
            799,
            812,
            90132
        ];
        assert.sameOrderedMembers(dfsInOrder(root), dfsInOrderFlattenedTree);
    });
});
