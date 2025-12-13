const name="khushi"
const repocCount=50

console.log(name+repocCount+" hello"); //this is the old way to concatinate strings 

console.log(`Heloo my name is ${name} and my repo count is ${repocCount}`); // this is called string interpolation means a placeholder is created in which we can add the variable


//we can also declare string in this way also
const gameName=new String("Khushi Sharma")
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));

const newString=gameName.substring(0,6); //6 is not included 
console.log(newString);

const anotherString=gameName.slice(-11,6) // can also give negative value also means we can print reverse string also 
// here slice(start,end)  start=length-11; 13-11 ;2 i.e "u"
console.log(anotherString);

const newString1="  Khushi  "
console.log(newString1);
console.log(newString1.trim()); // it will remove all the end and starting spaces 

const url="http://hitesh.com/hitesh%20choudhary"
//suppose we want to replace %20 with - or any thuing then we will do this
console.log(url.replace("%20","-"));
console.log(url.includes('hitesh'))

// now i want that on the basis of space i want to convert the string in array like Khushi Sharma , so its array will be [Khushi , Sharma]
console.log(gameName.split(" "));
