//导入判断相等的函数和创建节点的类
const { defaultEquals } = require('./util')
const { Node } = require('./LinkedNode')
const {  LinkedList } = require('./LinkedList')

// 双向链表节点类--继承链表的节点类
exports.DoublyNode = class DoublyNode extends Node {
  constructor(element, next, prev = null) {
    super(element, next)
    this.prev = prev
  }
}

// 创建双向链表类--继承链表类
exports.LinkedList = class LinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn)
    this.tail = null
  }

  // - push(element): 向链表尾部添加一个新元素
  push(element) {
    let node = new Node(element)
    let current;
    if (this.head == null) {
      this.head = node
      this.tail = node
    } else {
      current = this.tail
      node.prev = current
      current.next = node
      this.tail = node
    }
    this.count++
  }

  // - getElementAt(index):(继承) 返回链表特定位置的元素，如果不存在返回undefined
  getElementAt(index) {
    if (index >= 0 && index < this.count) {
      if(index > this.count / 2){
        let current = this.tail
        for (let i = this.count-1; i > index && current != null; i--) {
          current = current.prev
        }
        return current
      }else {
        let current = this.head
        for (let i = 0; i < index && current != null; i++) {
          current = current.next
        }
        return current
      }
    }
    return undefined
  }

  // - insert(element, index): 向链表特定位置插入一个新的元素,插入成功返回true，失败返回false
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element)
      if (index === 0) {
        const current = this.head
        current.prev = node //新增
        node.next = current
        this.head = node
      }else if(index === count) {
        this.push(element)
      }else {
        const previous = this.getElementAt(index - 1)
        const current = previous.next
        previous.next = node
        node.prev = previous
        
        node.next = current
        current.prev = node
        previous.next = node
      }
      return true
    }
    return false
  }

  // - indexOf(element):(继承) 返回元素在链表中的索引，如果链表中没有返回 -1

  // - removeAt(index): 从链表特定位置移除一个元素、
  reemoveAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head
      if (index === 0) {
        this.head = current.next
      } else {
        const previous = this.getElementAt(index - 1)
        current = previous.next 
        previous.next = current.next 
        if(index === count) { // 新增
          this.tail = previous
        }
      }
      this.count--
      return current
    }
    return undefined
  }
  // - remove(element): 从链表中移除一个元素

  // - getHead(): (继承)返回链表第一个元素

  // - getEnd(): 返回链表最后一个元素
  getHead() {
    return this.tail
  }

  // - isEmpty(): (继承)如果链表中不包括任何元素返回true，，否则返回false

  // - size(): (继承)返回链表包含的元素个数

  // - toString(): (继承)返回表示整个链表的字符串

}