import { assert } from "chai";
import Queue from './queue';

describe('Queue', () => {
    it('should have enqueue, dequeue, peek and isEmpty methods', () => {
        const queue = new Queue();

        assert.isTrue(queue.isEmpty());
        assert.isNull(queue.dequeue());

        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.enqueue(4);
        queue.enqueue(5);

        assert.equal(queue.dequeue(), 1);
        assert.equal(queue.peek(), 2);
        assert.equal(queue.dequeue(), 2);
        assert.isFalse(queue.isEmpty());
    });
});
