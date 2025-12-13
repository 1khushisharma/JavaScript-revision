const score=400 // by default datatpe is number 
console.log(score);

const balance=new Number(100)// now it is dedicately an number datatype only 
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toString());
console.log(balance.toFixed(2)); // this will bydefault give 2 placed digit after decimal 

const num=23.9453
console.log(num.toPrecision(2));//it will return in the form of string 
// otuput is 24 because it will focus on first 2 digit and give the precised value 

const hundreds=10000000;
console.log(hundreds.toLocaleString());//by default the values are seperated by commas in US manner 
// got Indian manner 
console.log(hundreds.toLocaleString('en-IN'));

//---------------Maths--------------------
//this library comes by default with js 
console.log(Math);
console.log(Math.abs(-4));// this will only convert -ve val to +ve val
console.log(Math.round(4.5));
console.log(Math.ceil(4.2));//choose upper val
console.log(Math.floor(4.9));//chooses lower val
console.log(Math.min(4,8,6));
console.log(Math.max(3,8,9));


console.log(Math.random());// the value alway lies btw 0 and 1 
//but if want to change the bounday value like number should be between 6 and 7
console.log((Math.random()*10)+1);// multiplying by 10 shift the digit by one place to left , also the min value will be 1 only because like 0.04 will also be 0.4 so if we add 1 then it make sure that the min value will be 1 not 0


const min=10
const max=20
console.log(Math.floor(Math.random() * (max-min+1)) + min) // this is the formala