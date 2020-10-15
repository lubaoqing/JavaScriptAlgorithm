let testArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log('testArr: ', testArr);
/**添加元素的方法 */
// 在尾部添加元素
testArr.push('0');//在尾部添加一个元素
console.log('testArr :>> ', testArr);
testArr.push('1', '2');//在尾部添加多个元素
console.log('testArr :>> ', testArr);
// 如果我们想把一个数组内的元素全部追加到另一个数组，可以使用ES6的新语法 ...newArr
let newArr = ['3', '4']
testArr.push(...newArr);// 等价于  testArr.push('3', '4')
console.log('testArr :>> ', testArr);

// 在头部添加元素
testArr.unshift('0');//在头部添加一个元素
console.log('testArr :>> ', testArr);
testArr.unshift('1', '2');//在头部添加多个元素
console.log('testArr :>> ', testArr);
// 如果我们想把一个数组内的元素全部添加到另一个数组的头部，可以使用ES6的新语法 ...newArr
testArr.unshift(...newArr);// 等价于  testArr.unshift('3', '4')
console.log('testArr :>> ', testArr);

// 在数组头部添加元素，数组内部执行复杂，操作步骤多，过多在数组头部添加元素，会影响性能
// 详细执行步骤，画了一个草图 数组头部添加元素.png (图丑，做好心理预期)

/**删除元素的方法 */
//在尾部删除元素:一次只能删除一个元素，并且函数会返回被删除的元素
console.log('testArr.pop() :>> ', testArr.pop());
console.log('testArr :>> ', testArr);

//在头部删除元素:一次只能删除一个元素，并且函数会返回被删除的元素
console.log('testArr.shift() :>> ', testArr.shift());
console.log('testArr :>> ', testArr);

/**搜索元素所在位置 */
// 从开始(索引为0)向后搜索：搜索到会返回索引，没有搜索到返回 -1
console.log('testArr.indexOf("1") :>> ', testArr.indexOf("1"));
console.log('testArr.indexOf("11") :>> ', testArr.indexOf("11"));
// indexOf也可以指定开始搜索的索引，比如我们从索引为 5 开始向后搜索 "1"
console.log('testArr.indexOf("1", 5) :>> ', testArr.indexOf("1", 5));

// 从结束(索引为length-1)向前搜索：搜索到会返回索引，没有搜索到返回 -1
console.log('testArr.lastIndexOf("1") :>> ', testArr.lastIndexOf("1"));
console.log('testArr.lastIndexOf("11") :>> ', testArr.lastIndexOf("11"));
// indexOf也可以指定开始搜索的索引，比如我们从索引为 10 开始向前搜索 "1"
console.log('testArr.lastIndexOf("1", 10) :>> ', testArr.lastIndexOf("1", 10));

