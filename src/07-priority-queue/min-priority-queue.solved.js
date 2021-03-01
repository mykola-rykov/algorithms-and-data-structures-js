class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

class MinPriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(value, priority) {
        const bubbleNewNodeUp = () => {
            let idx = this.values.length - 1,
                parentIdx;
            while (idx > 0) {
                parentIdx = Math.floor((idx - 1) / 2);
                if (this.values[parentIdx].priority <= node.priority) {
                    break;
                }
                [this.values[parentIdx], this.values[idx]] = [
                    this.values[idx],
                    this.values[parentIdx],
                ];
                idx = parentIdx;
            }
        };

        const node = new Node(value, priority);
        this.values.push(node);
        bubbleNewNodeUp();
    }

    dequeue() {
        const sinkNewRootDown = () => {
            const storageLength = this.values.length,
                sinkingNode = this.values[0];

            let sinkingIdx = 0,
                leftChildIdx,
                leftChild,
                rightChildIdx,
                rightChild,
                nextSinkingIdx;

            while (true) {
                leftChildIdx = sinkingIdx * 2 + 1;
                rightChildIdx = sinkingIdx * 2 + 2;
                nextSinkingIdx = null;
                if (leftChildIdx < storageLength) {
                    leftChild = this.values[leftChildIdx];
                    if (leftChild.priority < sinkingNode.priority) {
                        nextSinkingIdx = leftChildIdx;
                    }
                }
                if (rightChildIdx < storageLength) {
                    rightChild = this.values[rightChildIdx];
                    if (
                        (!nextSinkingIdx &&
                            rightChild.priority < sinkingNode.priority) ||
                        (nextSinkingIdx &&
                            rightChild.priority < leftChild.priority)
                    ) {
                        nextSinkingIdx = rightChildIdx;
                    }
                }
                if (!nextSinkingIdx) {
                    break;
                }
                this.values[sinkingIdx] = this.values[nextSinkingIdx];
                this.values[nextSinkingIdx] = sinkingNode;
                sinkingIdx = nextSinkingIdx;
            }
        };

        const min = this.values[0].value,
            lastNode = this.values.pop();

        if (this.values.length > 0) {
            this.values[0] = lastNode;
            sinkNewRootDown();
        }

        return min;
    }

    isEmpty() {
        return this.values.length === 0;
    }
}

export default MinPriorityQueue;
