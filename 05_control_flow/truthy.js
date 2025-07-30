const email = "parth@gmail.com"

if(email){
   // console.log("Email is present");    

}   
else {
   // console.log("Email is not present");
} 

//falsy values 
//false, 0, -0, BigInt 0n, "", null,  undefined, NaN

//truthy values
// true, 1, -1, BigInt 1n, "0", "false", [], {}, function(){}, Symbol(), Infinity, -Infinity, " "

// const emailEmpty = []
// if(emailEmpty.length===0){
//     console.log("Email is not present");
// }

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

//Nullish Coalescing Operator
let val1;
//val1 = 5 ?? 10 // If val1 is null or undefined, it will be assigned 10, otherwise it will keep its value
val1 = undefined ?? 10; // If val1 is undefined, it will be assigned 10, otherwise it will keep its value
console.log(val1); // 5 


// Ternary Operator
const age =18
age >= 18 ? console.log("You are an adult." ): "You are not an adult.";