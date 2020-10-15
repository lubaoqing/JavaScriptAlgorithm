//创建数组
// 01使用原型创建数组
let arr1 = new Array();//创建一个空的数组
console.log('arr1 :>> ', arr1);
let arr2 = new Array(3);//创建一个指定长度的数组  注意：只创建指定长度的数组，并没有赋值，打印数组看到值为empty,打印值为undefined
console.log('arr2 :>> ', arr2);
console.log('arr2[2] :>> ', arr2[2]);
let arr3 = new Array(1,2,3,4,5);//创建一个数组，并添加元素  注意：这里的第一个参数不是指数组的长度，而是数组的第一个元素
console.log('arr3 :>> ', arr3);
/*使用原型创建数组，不能创建一个只有一个元素并且有值的数组*/
// 02使用语法糖创建数组 -- 推荐的方式
let arr4 = [];//创建一个空数组
console.log('arr4 :>> ', arr4);
let arr5 = [12,13,45,28]; //创建一个数组，并添加元素
console.log('arr5: ', arr5);

/**数组内元素的类型 */ 
// JavaScript不限制在一个数组里面存储数据的数据类
// 即 我们可以在一个数组内存放任意数据类型的值，包括数组本身
// 下面这个数组存储了： 数字 字符串 布尔值 null undefined 数组 对象 函数
let otherArr = [0, '字符串', true, null, undefined, [0, 1], {a: 'a'}, function(){console.log('你好')}]
console.log('otherArr :>> ', otherArr);


/**数组的属性 */
// length: 数组的长度
console.log('arr1.length :>> ', arr1.length);
console.log('arr2.length :>> ', arr2.length);
console.log('arr3.length :>> ', arr3.length);
console.log('arr4.length :>> ', arr4.length);
console.log('arr5.length :>> ', arr5.length);
// 数组的长度是根据数组内元素实时变化的
// 我们试着新建一个数组，打印数组长度，在数组末尾添加一个元素和删除一个元素，再打印数组长度,
let testArr = [0,1,2,3,4]
console.log('testArr.length :>> ', testArr.length);
testArr.push(5)
console.log('testArr.length :>> ', testArr.length);
testArr.pop()
console.log('testArr.length :>> ', testArr.length);

/**读取数组的值 */
// 数组可以通过索引的方式读取到指定位置的元素的值
// 注意：数组的索引是从 0 开始，到 length-1 结束
// 打印在索引外得到的值为 undefined
let numArr = [0,1,2,3]
console.log('numArr[-1] :>> ', numArr[-1]);
console.log('numArr[0] :>> ', numArr[0]);
console.log('numArr[1] :>> ', numArr[1]);
console.log('numArr[2] :>> ', numArr[2]);
console.log('numArr[3] :>> ', numArr[3]);
console.log('numArr[4] :>> ', numArr[4]);
//遍历数组
// 我们知道，我们能够通过数组的索引拿到指定位置的，那么我们需要遍历数组，就可以通过遍历索引
// 即我们需要循环遍历索引  0~length-1
let usersName = ['lbq', 'why', 'ycl', 'ghp'];// 存储用户名的数组
for(let i=0; i < usersName.length; i++) {
  console.log('第' + i + '个用户的用户名为'+ usersName[i]);
}

/**修改数组指定位置的值 */
// 使用 arr[索引] = newValue 给数组指定位置重新赋值
let ages = [18,19,20]
console.log('ages: ', ages);
ages[0] = 88;
console.log('ages: ', ages);
ages[3] = 21; //因为元素数组中长度为3，所以arr[3]得到的是undefined，我们给这个重新赋值，相当于在数组的末尾添加了一个元素，和我们前面使用的push得到的结果一致
//  ages[3] = 21 等价于  ages.push(21)
console.log('ages: ', ages);
