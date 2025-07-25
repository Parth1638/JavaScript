// // # there are two types of datatypes

// // # 1. Primitive Datatypes there are 7 Primitive 
//  // - Number
//  // - String
//  // - Boolean   
//  // - Null
//  // - Undefined
//  // - Symbol (ES6)
//  // -   BigNum

//  const num = 1234
//  const value = "Parth"
//  const isActive = true
//  const nullValue = null
//  const undefinedValue = undefined
//  const sym = Symbol("Parth")
//  const bigNum = 45678765432345678999987n


//  console.log(num);
//  console.log(value);
//  console.log(isActive);
//  console.log(nullValue);
//  console.log(undefinedValue);
//  console.log(sym);
//  console.log(bigNum);


//  // 2: Non Primitive Datatype 
 
//  // - Array
//  // - Object
//  // - Function


//  let arr1 =["parth","charan","CSE","5th sem"]

//  let obj = { "dept":"CSE",
//     "sem": "5th sem",
//     "name": "Parth"
//  }


//  let FunctionCreated = function () {
//     console.log("Hello World");    
//  }

//  console.log(arr1);
//  console.log(obj);
//console.log(FunctionCreated);
 

 //************************************************************************************************/    

 // there are two types of memory 
//1. Stack  // All the Primitive Datatype use Stack memory, In this Copy is Pass therefore the Value which is pass in this will not change, Copy value will Change 

// let userName = "User"
// let yourName = userName

// console.log(userName);
// console.log(yourName);


// yourName = "Parth"

// console.log(yourName);


//2. Heap   // All the Non-Primitive Datatype use Stack memory, In this Reference is Pass therefore the Value which is pass in this will change, Because Reference is pass so value will Change
 
 let yoursem = {
        firstYear : "1st_Sem",
        secondYear:  "3rd_Sem",
        thirdYear: "5th_Sem"
 }

let currentSem = yoursem

currentSem.thirdYear = "6th_Sem"

console.log(yoursem.thirdYear);
console.log(currentSem.thirdYear);

