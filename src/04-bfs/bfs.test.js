import { assert } from "chai";
import bfs from './bfs';

class TreeNode {
    constructor(value = null, children = []) {
        this.value = value;
        this.children = children;
    }
}

describe('BFS', () => {
    it('should traverse a tree in a Breadth First way', () => {
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
        const bfsFlattenedTree = [
            42,
            98,
            17,
            6,
            1024,
            15,
            1098,
            107,
            98723,
            18,
        ];
        
        assert.sameOrderedMembers(bfs(root), bfsFlattenedTree);
    });
});
