const { Queue } = require('./Queue')

// console.log(Queue)
let queue = new Queue()
console.log(queue.isEmpty());
queue.enqueue('lbq')
console.log('queue :>> ', queue.toString());
queue.enqueue('ghp')
console.log(queue.size());
console.log('queue.peek() :>> ', queue.peek());
console.log('queue.dequeue() :>> ', queue.dequeue());
console.log(queue.toString())