const dfsPreOrder = (rootNode) => {
    let treeValues = [],
        node = rootNode;

    const goPreOrder = (node) => {
        treeValues.push(node.value);
        for (let i = 0; i < node.children.length; i++) {
            goPreOrder(node.children[i]);
        }
    };
    goPreOrder(node);

    return treeValues;
};

const dfsPostOrder = (rootNode) => {
    let treeValues = [],
        node = rootNode;

    const goPostOrder = (node) => {
        for (let i = 0; i < node.children.length; i++) {
            goPostOrder(node.children[i]);
        }
        treeValues.push(node.value);
    };
    goPostOrder(node);

    return treeValues;
};

const dfsInOrder = (rootNode) => {
    let treeValues = [],
        node = rootNode;

    const goInOrder = (node) => {
        node.left && goInOrder(node.left);
        treeValues.push(node.value);
        node.right && goInOrder(node.right);
    };
    goInOrder(node);

    return treeValues;
};

export { dfsPreOrder, dfsPostOrder, dfsInOrder };
