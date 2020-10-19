let testArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

/**map:遍历数组的每一个元素，同时可以处理每一个元素，最后会将每一次return的值组合为一个新的数组作为map的返回值 */
// 使用场景：需要遍历对整个数组所有元素做修饰或者修改时使用
// 我们这个例子就是需要把数组所有元素的value乘以2，然后组成一个新的数组
let mapArr = testArr.map((value, index, arr) => {
  console.log('value :>> ', value, 'index :>> ', index);
  //console.log('arr :>> ',arr);// arr为数组本身
  return value*2
})
/* //上面使用的箭头函数，下面时普通函数的写法
let mapArr = testArr.map(function(value, index, arr){
  console.log('value :>> ', value, 'index :>> ', index);
  //console.log('arr :>> ',arr);// arr为数组本身
  return value*2
})
*/
console.log('testArr :>> ', testArr);
console.log('mapArr :>> ', mapArr);
//注意：1.map的回调函数的每次的返回值，作为新数组的元素（这里的回调函数指在map(fn)的fn）
//      2.如果map的回调函数某一次没有返回值，则新数组当前位置的值为undefined


// map函数是遍历元素并处理，然后返回结果，无论这个元素我们是否处理都要有返回值
// 如果我们只希望符合要求的元素才返回值组成新的数组，我们需要使用filter
/**filter:遍历数组的每一个元素，在每一个元素位置进行筛选，return一个boolean值，只有Boolean值为true时，才把当前的value加入到新数组中 */
// 使用场景：需要筛选出满足某些要求的元素时
// 我们这个例子是，只有index为偶数，才把当前的value加入到新数组中
let filterArr = testArr.filter((value, index, arr) => {
  console.log('value :>> ', value, 'index :>> ', index);
  //console.log('arr :>> ',arr);// arr为数组本身
  return index % 2 == 0
})
console.log('testArr :>> ', testArr);
console.log('filterArr :>> ', filterArr);
//注意：filter的回调函数的每次的返回值只能是true或者false(不是也会进行转换)

// map和filter区别
// map是对数组的每一个元素进行某种运算，最后得到一个新的数组。        核心在运算
// filter是对数组的每一个元素进行某种筛选，最后得到一个新的数组。     核心在筛选

/**reduce:对数组中的每个元素执行一个由您提供的回调函数，将其结果汇总,最终返回最后一次回调函数的返回值 */
// rduce接收2个参数：testArr.reduce( callback, initialValue)
//  callback:每次执行的回调函数
//   initialValue：作为第一次调用 callback函数时的第一个参数的值。 
      //注意：如果没有提供初始值，则将使用数组中的第一个元素。 
      //注意：在没有初始值的空数组上调用 reduce 将报错
// 回调函数接收4个参数: testArr.reduce( (Accumulator, CurrentValue, CurrentIndex, SourceArray) => {}, initialValue)
//  Accumulator (acc) (累计器)：累计器累计回调的返回值; 它是上一次调用回调时返回的累积值
    //第一次调用时，值为initialValue初始值
//  CurrentValue (cur) (当前值):数组中正在处理的元素 
//  CurrentIndex (idx) (当前索引):数组中正在处理的当前元素的索引
    // 注意：如果提供了initialValue初始值，则起始索引号为0，否则从索引1起始(因为没有提供initialValue初始值，就使用数组中的第一个元素值为initialValue初始值)
    // 建议：使用reduce函数时，都提供初始值
//  SourceArray (src) (源数组):调用reduce()的数组,就是testArr
// 我们这个例子是计算testArr元素的累加的值
let sumTestArr = testArr.reduce((accumulator, value, index, arr) => {
  return accumulator + value
}, 0) // 注意：这里定义了初始值 0
console.log('sumTestArr: ', sumTestArr);
// 我们来完成一个更复杂的需求
//  计算testArr数组中，将下标为偶数的值乘以2再求和
//  分析：因为只有index为偶数才进行value乘2累加，并且reduce函数不能跳过某个值进行下个运算，所以当index为奇数是我们累加的值为0
let sumTestArrEven = testArr.reduce((accumulator, value, index, arr) => {
  if(index % 2 == 0){
    return accumulator + (value * 2)
  }else {
    return accumulator + 0
  }
}, 0) // 注意：这里定义了初始值 0
console.log('sumTestArrEven: ', sumTestArrEven);
// 因为map和filter都会返回一个新的数组，所以我们可以更优雅的来实现这个需求
let sumTestArrEven1 = testArr.map( value => value * 2)                        // 将所有元素乘以2
                            .filter((value, index) => index % 2 == 0)         // 将索引为偶数的元素筛选出来
                            .reduce((accumulator, value, index, arr) => {     // 将筛选出来的元素进行累加
                              return accumulator + value
                            }, 0) // 注意：这里定义了初始值 0
console.log('sumTestArrEven1: ', sumTestArrEven1);




