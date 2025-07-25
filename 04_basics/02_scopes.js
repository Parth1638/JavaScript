//global scopes
let a =10;
const b = 20;
var c = 30; 


if (true){
    //local scopes
    let d =10;
    const e = 20;
    var f = 30;
}

// console.log(a); // 10
// console.log(b); // 20
// console.log(c); // 30
// //console.log(d); // ReferenceError: d is not defined
// //console.log(e); // ReferenceError: e is not defined 
// console.log(f); // 30