//Array is an object , also a collection of various elements 
//js arrays are resizable and also can contain a mix od different datatypes
//js arrays are not associative arrays, so array elements cannot be accesssed using arbitrary strings as index means we can access array arr as arr[1] not as arr["one"]
//js array-copy operations create shallow copies, A shallow copy of an object is copy who share the same reference , means if copy is changed , then source can also be changed unintentionally

//ways of defining an array
const myArr=[0,1,2,3,4,5]
const myHer0=["a","b","c"]
const myArr2=new Array(1,2,3,4)

console.log(myArr[0]);

//array methods
// myArr.push(6)
// myArr.push(7)
// myArr.pop()

myArr.unshift(0) // inserts element at start , but if we have 1000 value then it wll shift all those value and insert element at start , so it loads computer ,that is why it is not used
myArr.unshift(1)
myArr.shift() // this will pop the starting element of the arr


console.log(myArr.includes(9)); // we can ask trhat 9 is present in myarr
console.log(myArr.indexOf(9)); // -1 because 9 is not present in the array
console.log(myArr.indexOf(3));

console.log(myArr);


const newArr=myArr.join() //Adds all the elements of an array into a string, separated by the specified separator string.
console.log(newArr);
console.log(typeof newArr);

//slice and splice ------------------imp
console.log("A",myArr);


const arr2=myArr.slice(1,3)//include 1 ans 2 and exclude 3
console.log(arr2)
console.log("B",myArr);


const arr3=myArr.splice(1,3)//include 1 ans 2 and includes 3 ,also if the new array is printed using the array on whic this function is appied then the left array is returned 
console.log(arr3)
console.log("C",myArr);