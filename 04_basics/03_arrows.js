 const user ={
    username: "Parth Charan",
    password: "12345",

    welcomeMessage: function() {    
        console.log(`Welcome ,${this.username}!`);
        console.log(this);
        
    }
 }

//  user.welcomeMessage()
//  user.username = "Parth Charan 2.0";
//  user.welcomeMessage()
// console.log(this);

// function coffee(){
//     let username = "Parth Charan";
//     console.log(this.username);
    
// }
// coffee();

// const coffee = function (){
//     let username = "Parth Charan";
//     console.log(this.username);
    
// } 


// arrow function
// const coffee = () => {
//     let username = "Parth Charan";
//     console.log(this);
    
// }
// coffee();


// const add =(num1, num2) => {   // wrap in { } then return is needed
//     return num1 + num2;
// }
// console.log(add(5, 10));

//const add = (num1, num2) => (num1 + num2);   // () no need to write return it is implicit
// const add = (num1, num2) => num1 + num2;

const add = (num1, num2) => ({username:"parthcharan"}) //for object it is need to write in ({})
console.log(add(5, 17));

