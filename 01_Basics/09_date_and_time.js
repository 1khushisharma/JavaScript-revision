//dates
let myDate=new Date()
console.log(myDate);

// now we will learn how to use date 
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

let myCreatedDate= new Date(2004,0,13); //this is array so the january is written as 00
console.log(myCreatedDate.toDateString());

let anotherDate=new Date("2023-01-11"); // this is not array because we have written date as YY-MM-DD
console.log(anotherDate.toLocaleString());

//to find the current timestamp
let timeStamp=Date.now();
console.log(timeStamp); // the output is in milli second 
//similarlly we can fine time in milli sec from a date also 
console.log(myCreatedDate.getTime());// in milli sec
console.log(myCreatedDate.getTime()/1000);//for time in sec divode by 1000 but it will give timw in decimal 
console.log(Math.floor(myCreatedDate.getTime()/1000));//for ono decimal time in sec

let newDate=new Date();
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getMonth()+1);//for actual month starting with 1


//one imp method
newDate.toLocaleString('default',{
    weekday:"long"
}) // object is written inside the function 