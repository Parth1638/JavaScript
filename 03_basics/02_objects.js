// const tinderuser = {}; //non singleton, literal creation
// console.log(tinderuser); // {}


const tinderuser = new Object ()//singleton object creation
tinderuser.name = "Parth";
tinderuser.age = 19;
tinderuser.isStudent = true;
tinderuser.location = "India";
// console.log(tinderuser); // {} 


const regularUser={
    email: "parth2gmail.com",
    fullname: {
        userfulname: {
            firstname: "Parth",
            lastname: "charan"
        }

    }
}


// console.log(regularUser); // parth2gmail.com
// console.log(regularUser.fullname.userfulname.firstname); // Parth

const obj1 = {1: "a", 2: "b", 3: "c"};
const obj2 = {4: "d", 5: "e", 6: "f"};


//const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 = {...obj1, ...obj2, 7: "g", 8: "h"}; // using spread operator to merge objects
// console.log(obj3); // {1: "a", 2: "b",   
console.log(obj3);


const user = [
    {
        id: 1,
    },
    {
        id: 2,
    },
    {
        id: 3,
    },
    {
        id: 4,
    }
]

user[1].id


// console.log(tinderuser); // Parth
// console.log(Object.keys(tinderuser)); // ["name", "age", "isStudent", "location"]
// console.log(Object.values(tinderuser)); // ["Parth", 19, true, "India"]



const course = {
    courseName: "JavaScript",
    courseDuration: "3 months",
}

const {courseDuration} = course; // destructuring assignment
console.log(courseDuration); // "3 months"

