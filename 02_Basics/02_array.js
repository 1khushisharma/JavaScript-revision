const a=["khushi","Karan","Neha","harsh"]
const b=["Prachi","Bhavya"]

// a.push(b) //  array a will take all the element of array b as a single element
// console.log(a);
// console.log(a[4]);
// //if we want more values inside the 4 element then 
// console.log(a[4][1]);

const c=a.concat(b)
console.log(c);
//if we dont want to use concat function then we can use spread operator
//eg - drop a glass bowl and it will spread into no of pieces 

const d=[...a,...b]
console.log(d);


const e=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real=e.flat(Infinity) // it will return all the element , inside bracket you will give depth , so simply write infinity so it will solve all the depth
console.log(real);


// asking if given thing is array 
console.log(Array.isArray(a));
// converting any thing in array 
console.log(Array.from("khushi"));
console.log(Array.from({name:"khushi"})); // when converting object into array , it will return empty array because it is not able to understand , we have to tell to make array of keys or value 

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));//Returns a new array from a set of elements.
