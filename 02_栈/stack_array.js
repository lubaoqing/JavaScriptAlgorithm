exports.Stack = class Stack{
  constructor() {
    this.item = []
  }
  // - push(elements):添加一个或者多个新元素到栈顶
  push(element) {
    this.item.push(element)
  }
  // - pop():移除栈顶的元素，同时返回移除的元素
  pop() {
    return this.item.pop()
  }
  // - peek():返回栈顶的元素，不对栈做修改
  peek() {
    return this.item[this.item.length - 1]
  }
  // - isEmpty():如果栈里没有任何元素，返回true，否则返回false
  isEmpty() {
    return this.item.length === 0
  }
  // - clear():移除栈里的所有元素
  clear() {
    this.item = []
  }
  // - size():返回栈里的元素个数
  size() {
    return this.item.length
  }
}
