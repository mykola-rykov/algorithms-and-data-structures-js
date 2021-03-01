import { assert } from "chai";
import MinPriorityQueue from './min-priority-queue';

describe('Min Priority Queue', () => {
    it('should enqueue and dequeue prioritized values to and from Min Priority Queue', () => {
        const minPriorityQueue = new MinPriorityQueue();

        minPriorityQueue.enqueue('verde', 12);
        minPriorityQueue.enqueue('azul', 10);
        minPriorityQueue.enqueue('gris', 1);
        minPriorityQueue.enqueue('amarillo', 5);
        minPriorityQueue.enqueue('blanco', 189);
        minPriorityQueue.dequeue();
        minPriorityQueue.enqueue('rosado', 1987);
        minPriorityQueue.enqueue('negro', 0);
        minPriorityQueue.dequeue();
        minPriorityQueue.enqueue('rojo', 100);
        minPriorityQueue.enqueue('lilo', 2);
        minPriorityQueue.dequeue();
        minPriorityQueue.dequeue();

        assert.equal(minPriorityQueue.dequeue(), 'azul');
        assert.isFalse(minPriorityQueue.isEmpty());
    });
});
