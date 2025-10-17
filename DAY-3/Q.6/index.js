// 6. Write a function to implement a Queue. With below operations:
// Enqueue: Adds a new element to the rear (end) of the queue.
// Dequeue: Removes and returns the element from the front of the queue.
// Peek: Returns the value of the element at the front of the queue without removing it.
// isEmpty: Checks if the queue contains no elements.

let arr = [];

function getQueue() {
  return {
    enQueue(value) {
      arr.push(value);
    },
    deQueue() {
      return arr.shift();
    },
    peek() {
      return arr[0];
    },
    isEmpty() {
      return arr.length > 0 ? false : true;
    },
  };
}

const myQueue = getQueue();
myQueue.enQueue("1");
myQueue.enQueue("2");
console.log(myQueue.deQueue());
console.log(myQueue.peek());
console.log(myQueue.isEmpty());
