//literals

const mySym = Symbol("mySymbol");

const JsUser = {
    name: "Parth",
     age: 19,
    location: "India",
    "isStudent": true,
    [mySym]: "mySymbol1"
}

// console.log(JsUser.name);   //we can access objects with dot notation
// console.log(JsUser["age"]); // we can access objects with bracket notationb 
// console.log(JsUser["isStudent"]); // we have to use [ ] when we are initilize " "
// console.log(JsUser[mySym]); 


// JsUser.age = 20; // Updating age
// console.log(JsUser.age); // 20

// Object.freeze(JsUser); // Freezing the object
// console.log(JsUser);


JsUser.greeting = function(){
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}

JsUser.greetingtwo = function(){
    console.log("hello user");
}


console.log(JsUser.greeting()); // Hello, my name is Parth and I am 19 years old.
console.log(JsUser.greetingtwo()); // hello user
