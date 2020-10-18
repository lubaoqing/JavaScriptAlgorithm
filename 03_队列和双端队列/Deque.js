exports.Deque = class Deque {
  constructor() {
    this.count = 0
    this.lowestCount = 0
    this.item = {}
  }

  //addFront(element):在双端队列的前端添加元素
  addFront(element) {
    if(this.isEmpty()) {
      this.addBack(element)
    }else {
      this.lowestCount--
      this.item[this.lowestCount] = element
    }
  }
  //addBack(element):在双端队列的后端添加元素
  addBack(element) {
    this.item[this.count] = element
    this.count++
  }
  //removeFront():在双端队列的前端删除一个元素，并返回删除的元素
  removeFront() {
    let result = this.item[this.lowestCount]
    delete this.item[this.lowestCount]
    this.lowestCount++
    return result
  }
  //removeBack():在双端队列的后端删除一个元素，并返回删除的元素
  removeBack() {
    this.count--
    let result = this.item[this.count]
    delete this.item[this.count]
    return result
  }
  // peekFront():返回双端队列的前端第一个元素
  peekFront() {
    if(this.isEmpty()) {
      return undefined
    }
    return this.item[this.lowestCount]
  }
  // peekBack():返回双端队列的后端第一个元素
  peekBack() {
    if(this.isEmpty()) {
      return undefined
    }
    return this.item[this.count - 1]
  }
  // isEmpty(): 双端队列如果含有元素，返回true,否则返回false
  isEmpty() {
    return this.size() === 0
  }

  //size(): 返回双端队列的长度
  size() {
    return this.count - this.lowestCount
  }
  //clear(): 清空双端队列
  clear() {
    this.item = {}
    this.lowestCount = 0
    this.count = 0
  }
  //toString()
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