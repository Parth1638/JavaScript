// //  Dates

// let myDate = new Date(); // Current date and time
// console.log(myDate.toString());




// let createdDate = new Date(2023, 0 , 23); // Specific date and time
// let createdDate2 = new Date("2023-01-14"); // ISO format
// console.log(createdDate.toDateString());
// console.log(createdDate2.toDateString());
// console.log(Date.now());
// console.log(Date.now() / 1000); // Current timestamp in seconds
//  console.log(Math.floor(Date.now() / 1000)); // Current timestamp in seconds, rounded down
 

//  let newDate = new Date()
//  console.log(newDate);
//  console.log(newDate.getMonth() + 1); // Months are 0-indexed, so we add 1
//     console.log(newDate.getFullYear());
//  console.log(newDate.getDate());        


 newDate.toLocaleDateString('default', {

    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
 });
 
 