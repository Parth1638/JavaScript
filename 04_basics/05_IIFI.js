// immediately invoked function expression

(function greet(){
    console.log("Hello, World!");
})();
( (say) => {
    console.log(`Hello ${say}!`); 
})('parth')