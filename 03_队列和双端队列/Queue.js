exports.Queue = class Queue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.item = {}
  }

  // enqueue(element):向队列尾部添加元素
  enqueue(element) {
    this.item[this.count] = element
    this.count++
  }
  // dequeue():移除队列的第一项，并返回第一项元素
  dequeue() {
    if(this.isEmpty()) {
      return undefined;
    }
    let result = this.item[this.lowestCount]
    delete this.item[this.lowestCount]
    this.lowestCount++
    return result
  }
  // peek():返回队列的第一个元素
  peek() {
    if(this.isEmpty()) {
      return undefined
    }
    return this.item[this.lowestCount]
  }
  // isEmpty(): 如果队列不包含元素，返回true，否则返回false
  isEmpty() {
    return this.size() === 0
  }
  // size():返回队列的元素个数
  size() {
    return this.count - this.lowestCount
  }
  // clear(): 清空队列
  clear() {
    this.item = {}
    this.count = 0
    this.lowestCount = 0
  }
  // toString(): 转化为字符串
  toString() {
    if(this.isEmpty()) {
      return ''
    }
    let resultString = '' + this.item[this.lowestCount]
    for(let i = this.lowestCount + 1; i < this.count; i++) {
      resultString += ',' + this.item[i]
    }
    return resultString
  }
}
