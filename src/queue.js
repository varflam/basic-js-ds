const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue extends ListNode {
  constructor(x) {
    super();
    this.value = x;
    this.next = null;
  }

  getUnderlyingList() {
    return this;
  }

  enqueue(value) {
    let current = this;

    if(!current.value) {
      current.value = value;
    } else {
      while(current.next) {
        current = current.next;
      }

      current.next = new ListNode(value);
    }
  }

  dequeue() {
    let deletedValue = this.value;
    let current = this;
    let next = this.next;

    current.value = next.value;
    current.next = next.next;

    return deletedValue;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(3);
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(8);
console.log(queue.dequeue());
console.log(queue.getUnderlyingList());
console.log(queue);

module.exports = {
  Queue
};
