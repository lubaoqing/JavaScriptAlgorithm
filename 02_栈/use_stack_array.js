const { Stack } = require('./stack_array')

const stack = new Stack()
console.log('stack.isEmpty() :>> ', stack.isEmpty());// stack.isEmpty() :>>  true
// 入栈
stack.push(3)
stack.push(9)
console.log('stack.peek() :>> ', stack.peek());// stack.peek() :>>  9
stack.push(18)
console.log('stack.size() :>> ', stack.size());// stack.size() :>>  3
console.log('stack.isEmpty() :>> ', stack.isEmpty());// stack.isEmpty() :>>  false
stack.push(15)
// 出栈
stack.pop()
stack.pop()
console.log('stack.size() :>> ', stack.size());// stack.size() :>>  2




