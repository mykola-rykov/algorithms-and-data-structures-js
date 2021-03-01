class LinkedListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const newNode = new LinkedListNode(value);

        if (!this.head) {
            this.head = newNode;
            return this;
        }

        let node = this.head;
        while (node.next) {
            node = node.next;
        }
        node.next = newNode;

        return this;
    }

    removeHead() {
        if (!this.head) {
            return null;
        }

        const deletedHeadValue = this.head.value;
        this.head = this.head.next;

        return deletedHeadValue;
    }
}

class Queue {
    constructor() {
        this.linkedList = new LinkedList();
    }

    isEmpty() {
        return !this.linkedList.head;
    }

    peek() {
        return this.linkedList.head ? this.linkedList.head.value : null;
    }

    enqueue(value) {
        return !!this.linkedList.append(value);
    }

    dequeue() {
        return this.linkedList.removeHead();
    }
}

export default Queue;
