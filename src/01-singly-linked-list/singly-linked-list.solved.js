class SinglyLinkedListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const node = new SinglyLinkedListNode(value);

        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            this.tail = node;
        }

        return this;
    }

    remove(value) {
        if (!this.head) {
            return null;
        }

        let deletedNode = null;
        if (this.head.value === value) {
            deletedNode = this.head;
            this.head = this.head.next;
            if (this.head === null) {
                this.tail = null;
            }
            return deletedNode;
        }

        let node = this.head;
        while (node.next) {
            if (node.next.value === value) {
                deletedNode = node.next;
                node.next = node.next.next;
                if (node.next === null) {
                    this.tail = node.next;
                }
                break;
            }
            node = node.next;
        }

        return deletedNode;
    }

    find(value) {
        if (!this.head) {
            return null;
        }

        let node = this.head;
        while (node) {
            if (node.value === value) {
                return node;
            }
            node = node.next;
        }

        return null;
    }

    reverse() {
        // prev > node > next
        // all of them are for the original,
        // not reversed list.

        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let next;
        let prev = null;

        // node is an old head at a first iteration.
        // this.head is an old tail,
        // so this while loop is effectively
        // loops from old head to old tail.
        while(prev !== this.head) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
    }
}

export default SinglyLinkedList;
