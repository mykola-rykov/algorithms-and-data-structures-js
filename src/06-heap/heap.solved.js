class MaxHeap {
    constructor() {
        this.values = [];
    }

    insert(value) {
        const bubbleNewValueUp = (value) => {
            let idx = this.values.length - 1,
                parentIdx;
            while (idx > 0) {
                // Magic formula which comes from the fact that it's a balanced Binary Tree,
                // and there are always 1 to 2 children at each node.
                parentIdx = Math.floor((idx - 1) / 2);
                if (this.values[parentIdx] >= value) {
                    break;
                }
                [this.values[parentIdx], this.values[idx]] = [
                    this.values[idx],
                    this.values[parentIdx],
                ];
                idx = parentIdx;
            }
        };

        this.values.push(value);
        bubbleNewValueUp(value);
    }

    extractMax() {
        const sinkNewRootDown = () => {
            const storageLength = this.values.length,
                sinkingValue = this.values[0];

            let sinkingIdx = 0,
                leftChildIdx,
                leftChild,
                rightChildIdx,
                rightChild,
                nextSinkingIdx;

            while (true) {
                // Magic formula which comes from the fact that it's a balanced Binary Tree,
                // and there are 1 to 2 children at each node.
                leftChildIdx = sinkingIdx * 2 + 1;
                rightChildIdx = sinkingIdx * 2 + 2;
                nextSinkingIdx = null;
                if (leftChildIdx < storageLength) {
                    leftChild = this.values[leftChildIdx];
                    if (leftChild > sinkingValue) {
                        nextSinkingIdx = leftChildIdx;
                    }
                }
                if (rightChildIdx < storageLength) {
                    rightChild = this.values[rightChildIdx];
                    if (
                        (!nextSinkingIdx && rightChild > sinkingValue) ||
                        (nextSinkingIdx && rightChild > leftChild)
                    ) {
                        nextSinkingIdx = rightChildIdx;
                    }
                }
                if (!nextSinkingIdx) {
                    break;
                }
                this.values[sinkingIdx] = this.values[nextSinkingIdx];
                this.values[nextSinkingIdx] = sinkingValue;
                sinkingIdx = nextSinkingIdx;
            }
        };

        const max = this.values[0],
            lastValue = this.values.pop();

        if (this.values.length > 0) {
            this.values[0] = lastValue;
            sinkNewRootDown();
        }

        return max;
    }

    getFlattened() {
        return this.values;
    }
}

export default MaxHeap;
