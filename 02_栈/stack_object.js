exports.Stack = class Stack{
  constructor() {
    this.item = {};
    this.count = 0;
  }
  // - push(elements):添加一个元素栈顶，这个版本只允许我们一次插入一个元素到栈顶
  push(element) {
    this.item[this.count] = element;
    this.count++;
  }
  // - pop():移除栈顶的元素，同时返回移除的元素
  pop() {
    if(this.isEmpty()) {
      return undefined
    }
    this.count--;
    let result = this.item[this.count];
    delete this.item[this.count];
    return result;
  }
  // - peek():返回栈顶的元素，不对栈做修改
  peek() {
    return this.item[this.count-1]
  }
  // - isEmpty():如果栈里没有任何元素，返回true，否则返回false
  isEmpty() {
    return this.count === 0;
  }
  // - clear():移除栈里的所有元素
  clear() {
    this.item = {};
    this.count = 0;
  }
  // - size():返回栈里的元素个数
  size() {
    return this.count;
  }
  // - toString():
  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let objString = `${this.items[0]}`; // {1}
    for (let i = 1; i < this.count; i++) { // {2}
      objString = `${objString}, ${this.items[i]}`; // {3}
    }
    return objString;
  }
}
