//  const age = 20;

//  if (age>=20){
//     console.log("You are an adult.");
//  }
//  else {
//     console.log("You are not an adult.");
//  }


// const score =200;
// if(score >= 100) {
//     let grade = "A";
//     console.log(`You passed the exam with grade: ${grade}`);
    
// }
// console.log(`You passed the exam with grade: ${grade}`);  //cannot access outside from the scope of if


// const balance = 1000
// if (balance >= 100) console.log("You have enough balance."),console.log("You need to deposit more money."); //implicit return

// const balance = 1000;
// if (balance >= 100) {
//     console.log("You have enough balance.");
//    else if (balance >= 500) {
//         console.log("You have a good balance.");
    
//    else  if (balance >= 900) {
//         console.log("You have a very good balance.");
//     }
// }
// }
// else {
//     console.log("You need to deposit more money.");
// }


const userLoggedIn = true
const debitcard = true
const loggedInFromEmail = false
const loggedInFromPhone = true

if(userLoggedIn && debitcard) {
    console.log("You can make a purchase.");
}
if(loggedInFromEmail || loggedInFromPhone) {
    console.log("You can access your account.");
}