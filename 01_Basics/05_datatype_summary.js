/*
------Js is dynamically typed language because In JavaScript, you do NOT tell the type of a variable when you create it.
The type is decided at runtime (when the program runs).------------


data types are mainly defined by how data is stored in memory 
on that basis datatype are of two type
1)primitive 
2)non-primitive / reference type


1)primitive datatype: they are call be value (means copy is passed rather than its reference ),total 7 categories
  -String
  -number
  -boolean
  -null
  -undefined
  -symbol(it is used to make any value unique)
   eg-
   const id=Symbol("123");
   const anotherId=Symbol("123");
   clg(id==ansotherId)  // false
  -bigint

2) Refernce datatype (non-primitive): these are the datatype whose reference is given to make any changes.
  -array
   eg:
   const heros=["khushi","neha"];
  -objects
   eg:
   let obj={
   name:"khushi",
   age:21,
   }
  -functions
   eg:
   const fun=function(){
   clg("hello worls");
   }

*/