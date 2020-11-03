class MySet{
  constructor() {
    this.items = {}
  }
  
  // add(element): 向集合添加一个新的元素
  add(element) {
    if(!this.has(element)) {
      this.items[element] = element
      return true
    }
    return false
  }

  // delete(element): 从集合中删除一个元素
  delete(element) {
    if(!this.has(element)) {
      delete this.items[element]
      return true
    }
    return false
  }

  // has(element): 如果元素在集合中，返回true,否则返回false
  has(element) {
    // return element in this.items
    return Object.prototype.hasOwnProperty.call(this.items, element)
  }

  // clear(): 移除集合中的所有元素
  clear() {
    this.items = {}
  }

  // size(): 返回集合所包含的元素个数
  size() {
    return Object.keys(this.items).length
  }
  // 更朴素的做法
  sizeLegacy() {
    let count = 0
    for (const key in this.items) {
      if (this.items.hasOwnProperty(key)) {
        count++
      }
    }
    return count
  }
  // values(): 返回一个包含集合中所有元素的数组
  values() {
    return Object.values(this.items)
  }
  // 更朴素的做法
  valuesLegacy() {
    let values = []
    for (const key in items) {
      if (items.hasOwnProperty(key)) {
        const element = items[key];
        values.push(element)
      }
    }
    return values
  }

  // union(oterSet): 计算两个集合的并集，返回新的集合
  union(otherSet) {
    let unionSet = new MySet()
    this.values.forEach(element => {
      unionSet.add(element)
    });
    otherSet.values.forEach(element => {
      unionSet.add(element)
    });
    return unionSet
  }

  // intersection(otherSet): 计算两个集合的交集，返回新的集合
  intersection(otherSet) {
    if(this.size() > otherSet.size()) {
      return otherSet.intersection(this)
    }
    let intersectionSet = new MySet()
    this.values.forEach(element => {
      if(otherSet.has(element)) {
        intersectionSet.add(element)
      }
    })
    return intersectionSet
  }

  // difference(otherSet): 计算连个集合的差集，返回新的集合 eg:A-B  A.difference(B)
  difference(otherSet) {
    let differenceSet = new MySet()
    this.values.forEach(element => {
      if(!otherSet.has(element)) {
        differenceSet.add(element)
      }
    })
    return differenceSet
  }

  // isSubsetOf(otherSet): 判断集合是否为另一个的子集，是返回true，否则返回false  eg:判断A是否为B的子集  A.isSubsetOf(B)
  isSubsetOf(otherSet) {
    if(this.size() > otherSet.size()) {
      return false
    }
    this.values.forEach(element => {
      if(!otherSet.has(element)) {
        return false
      }
    })
    return false
  }
}


module.exports = MySet