import { assert } from "chai";
import SinglyLinkedList from './singly-linked-list';

describe('Singly Linked List', () => {
    it('should have a method to append node to the end of a linked list', () => {
        let linkedList = new SinglyLinkedList();

        assert.isNull(linkedList.head);

        let newList = linkedList.append(1);
        assert.equal(newList.head.value, 1);
        assert.equal(newList.tail.value, 1);
        assert.isNull(newList.head.next);

        linkedList.append(2);

        assert.equal(linkedList.head.value, 1);
        assert.equal(linkedList.head.next.value, 2);
        assert.equal(linkedList.tail.value, 2);
        assert.isNull(linkedList.tail.next);
    });

    it('should have a method to remove first node with a given value from a linked list', () => {
        let linkedList = new SinglyLinkedList();
        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);
        linkedList.append(4);
        linkedList.append(5);
        linkedList.append(5);
        linkedList.remove(5);

        assert.equal(linkedList.head.next.next.next.next.value, 5);
        assert.equal(linkedList.tail.value, 5);
        assert.isNull(linkedList.tail.next);

        assert.isNull(linkedList.remove(999));
    });

    it('should have a method to find a first node with a given value in a linked list', () => {
        let linkedList = new SinglyLinkedList();
        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);
        linkedList.append(4);
        linkedList.append(5);
        let node = linkedList.find(5);

        assert.equal(linkedList.tail.value, 5);
        assert.equal(node.value, 5);
        assert.isNull(node.next);
        
        node = linkedList.find(7);
        assert.isNull(node);
    });

    it('should have a method to reverse a linked list', () => {
        let linkedList = new SinglyLinkedList();
        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);
        linkedList.append(4);
        linkedList.append(5);
        linkedList.reverse();
        
        assert.equal(linkedList.head.value, 5);
        assert.equal(linkedList.head.next.value, 4);
        assert.equal(linkedList.head.next.next.value, 3);
        assert.equal(linkedList.head.next.next.next.value, 2);
        assert.equal(linkedList.tail.value, 1);

        assert.isNull(linkedList.tail.next);
    });

    it('the reverse method should work correctly in a single-item linked list', () => {
        let linkedList = new SinglyLinkedList();
        linkedList.append(42);
        linkedList.reverse();
        
        assert.equal(linkedList.head.value, 42);
        assert.equal(linkedList.tail.value, 42);
        assert.isNull(linkedList.tail.next);
    });

    it('the reverse method should work correctly in an empty linked list', () => {
        let linkedList = new SinglyLinkedList();
        linkedList.reverse();
        
        assert.isNull(linkedList.head);
        assert.isNull(linkedList.tail);
    });
});
