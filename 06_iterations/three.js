// //for of

// const arr = [1,2,3,4,5]
// for (const num of arr) {
//     console.log(num);
    
// }

// const greetings = "hello world!"
// for (const val of greetings) {
//     console.log(`Each char is ${val}`);
// }


//maps

const map = new Map()
map.set('IN', "India")
map.set('USA',"United State of America")
map.set('IN',"India")

// console.log(map);
for (const [key, value] of map) {
    console.log(key, ':-', value);
    }

const myObject ={
    'sem3': "7.83",
    'sem4': "7.30"
}

// for (const [key,value] of myObject) {
//     console.log(key,value);
    
// }  //not working