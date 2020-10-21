//导入判断相等的函数和创建节点的类
const {
  defaultEquals
} = require('./util')
const {
  Node
} = require('./LinkedNode')

// 创建链表类
exports.LinkedList = class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.head = null
    this.count = 0
    this.equalsFn = equalsFn
  }

  // - push(element): 向链表尾部添加一个新元素
  push(element) {
    let node = new Node(element)
    let current;
    if (this.head == null) {
      this.head = node
    } else {
      current = this.head
      while (current.next != null) {
        current = current.next
      }
      current.next = node
    }
    this.count++
  }

  // - getElementAt(index): 返回链表特定位置的元素，如果不存在返回undefined
  getElementAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head
      for (let i = 0; i < index && current != null; i++) {
        current = current.next
      }
      return current
    }
    return undefined
  }

  // - insert(element, index): 向链表特定位置插入一个新的元素,插入成功返回true，失败返回false
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element)
      if (index === 0) {
        const current = this.head
        node.next = current
        this.head = node
      }else if(index === count) {
        this.push(element)
      } else {
        const previous = this.getElementAt(index - 1)
        const current = previous.next
        node.next = current
        previous.next = node
      }
      return true
    }
    return false
  }

  // - indexOf(element): 返回元素在链表中的索引，如果链表中没有返回 -1
  indexOf(element) {
    let current = this.head,
      index = 0
    while (current != null) {
      if (this.equalsFn(current.element, element)) {
        return index
      }
      index++
      current = current.next
    }
    return -1
  }

  // - removeAt(index): 从链表特定位置移除一个元素、
  reemoveAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head
      if (index === 0) {
        this.head = current.next
      } else {
        const previous = this.getElementAt(index - 1) //index-1的节点
        current = previous.next //index的节点
        previous.next = current.next //把index+1的节点保存在index-1的next中
        //index最开始的节点就被替换为index+1的节点，即，移除了index节点
      }
      this.count--
      return current
    }
    return undefined
  }
  // - remove(element): 从链表中移除一个元素
  remove(element) {
    const index = this.indexOf(element)
    this.reemoveAt(index)
  }

  // - getHead(): 返回链表第一个元素
  getHead() {
    return this.head
  }

  // - isEmpty(): 如果链表中不包括任何元素返回true，，否则返回false
  isEmpty() {
    return this.count === 0
  }

  // - size(): 返回链表包含的元素个数
  size() {
    return this.count
  }
  // - toString(): 返回表示整个链表的字符串
  toString() {
    if(this.count === 0) {
      return ''
    }
    let objString = `${this.head.element}`
    let current = this.head.next
    for(let i=0;i<this.count;i++) {
      objString += `,${current.element}`
      current = current.next
    }
    return objString
  }

}