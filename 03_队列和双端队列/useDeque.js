const { Deque } = require('./Deque')

// console.log(deque)
let deque = new Deque()
console.log(deque.isEmpty());
deque.addFront('lbq')
deque.addFront('lbq1')
deque.addFront('lbq2')
console.log('deque :>> ', deque.toString());
deque.addBack('ghp')
deque.addBack('ghp1')
console.log(deque.size());
console.log('deque.peekBack() :>> ', deque.peekBack());
console.log('deque.peekFront() :>> ', deque.peekFront());
console.log(deque.toString())
deque.removeFront()
console.log(deque.size())