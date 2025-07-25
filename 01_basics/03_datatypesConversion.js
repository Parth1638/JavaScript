// let num = 33

// console.log(typeof num); // number

// let numtostring = String(num);
// console.log(typeof numtostring); // string

// console.log(numtostring);


//value string to number conversion
// let val ="168pj"

// console.log(typeof val); // string

// let valtonum = Number(val);
// console.log(typeof valtonum); // number
// console.log(valtonum); // NaN (Not a Number)  therefore it will convert but it will be not a number 


//value null 

// let score = null;

// console.log(typeof score); // object (this is a known bug in JavaScript)
// console.log(score); // null 
// let scoreToNumber = Number(score);
// console.log(typeof scoreToNumber); // number
// console.log(scoreToNumber); // 0 (null converts to 0 when converted to number)


// value undefined

// let score;
// console.log(typeof score); // undefined
// console.log(score); // undefined
// let scoreToNumber = Number(score);
// console.log(typeof scoreToNumber);
// console.log(scoreToNumber); // NaN (undefined converts to NaN when converted to number)


// value boolean to number conversion
// let isActive = true;

// console.log(typeof isActive); // boolean
// let isActiveToNumber = Number(isActive);
// console.log(typeof isActiveToNumber); // number
// console.log(isActiveToNumber); // 1 (true converts to 1 when converted to number)


// value number to boolean conversion

let isPass = 1
console.log(typeof isPass); // number
let isPassToBoolean = Boolean(isPass);
console.log(typeof isPassToBoolean);
console.log(isPassToBoolean); // true (1 converts to true when converted to boolean)
 