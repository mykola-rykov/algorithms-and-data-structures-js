import Queue from '../02-queue/queue';

const bfs = (root) => {
    let queue = new Queue(),
        treeValues = [],
        node;
    queue.enqueue(root);
    while (!queue.isEmpty()) {
        node = queue.dequeue();
        treeValues.push(node.value);
        for (let i = 0; i < node.children.length; i++) {
            queue.enqueue(node.children[i]);
        }
    }
    return treeValues;
};

export default bfs;
