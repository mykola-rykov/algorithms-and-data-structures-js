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

    /**
     * Enqueues given value according to its priority to a Min Priority Queue
     * @param value 
     * @param priority 
     */
    enqueue(value, priority) {
        
    }

    /**
     * Dequeues a value with a highest priority
     * (lowest number which represents the priority) from a Min Priority Queue
     * @returns value
     */
    dequeue() {
        
    }

    /**
     * Returns true if queue is empty
     * @returns value
     */
    isEmpty() {
        return this.values.length === 0;
    }
}

export default MinPriorityQueue;
