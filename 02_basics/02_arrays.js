const cars = ["kwid", "city", "swift", "baleno", "alto"];
const bikes = ["pulsar", "duke", "apache", "splendor", "honda"];

// cars.push(bikes); // adds the bikes array to the end of the cars array
// console.log(cars[5][2]); // "apache" - accessing the third element of the bikes array within cars

// const all = cars.concat(bikes) // combines both arrays
// console.log(all);


// const all_vehicle =[...cars,...bikes]; // using spread operator to combine both arrays
// console.log(all_vehicle); // ["kwid", "city", "swift", "baleno", "alto", "pulsar", "duke", "apache", "splendor", "honda"]

const another_array = [1,2,3,[2,7,8],[2,5,[4,8]]];
//console.log(another_array[4][1][0]); // 4 - accessing the first element of the third nested array
const real_array = another_array.flat(Infinity);
console.log(real_array); // [1, 2, 3, 2, 7

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1, score2, score3)); // true - checks if cars is an array
