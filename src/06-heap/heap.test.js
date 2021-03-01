import { assert } from "chai";
import MaxHeap from './heap';

describe('Heap', () => {
    it('should return a Max Heap nicely flattened to an array', () => {
        const maxHeap = new MaxHeap();

        maxHeap.insert(7);
        maxHeap.insert(10);
        maxHeap.insert(2);
        maxHeap.insert(0);
        maxHeap.insert(-5);
        maxHeap.insert(16);
        maxHeap.insert(42);
        maxHeap.insert(3);
        maxHeap.insert(8);

        const flattenedHeap = [42, 8, 16, 7, -5, 2, 10, 0, 3];
        assert.sameOrderedMembers(maxHeap.values, flattenedHeap);
    });

    it('should extract a max value and rebuild Max Heap so it stays valid', () => {
        const maxHeap = new MaxHeap();

        maxHeap.insert(7);
        maxHeap.insert(10);
        maxHeap.insert(2);
        maxHeap.insert(0);
        maxHeap.insert(-5);
        maxHeap.insert(16);
        maxHeap.insert(42);
        maxHeap.insert(3);
        maxHeap.insert(8);

        assert.equal(maxHeap.extractMax(), 42);
        const flattenedHeap = [16, 8, 10, 7, -5, 2, 3, 0];
        assert.sameOrderedMembers(maxHeap.values, flattenedHeap);
    });

    it('should extract a value even if a Max Heap contained a single element, making it empty', () => {
        const maxHeap = new MaxHeap();

        maxHeap.insert(42);

        assert.equal(maxHeap.extractMax(), 42);
        assert.sameOrderedMembers(maxHeap.values, []);
    });
});
