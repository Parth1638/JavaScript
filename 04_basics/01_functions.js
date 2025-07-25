// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2 );

// }


function addTwoNumbers(number1, number2) {

    //  

    return number1 + number2;

}

const result = addTwoNumbers(5, 10); // 15 
//  console.log(result);



function loginUserMessage(username) {
    //if(username === undefined) both do same thing
    // if(!username) {
    if(!username) {
        console.log("No username provided");
        return;
    }   
    return `${username} has logged in !`
}

//console.log(loginUserMessage()); // "JohnDoe has logged in !"



function calculateCartPRice(...num1){
    return num1
}

//console.log(calculateCartPRice(100,200,400,800)); // 100

const user =
{
    username: "JohnDoe",
    password: "12345",
}

function handleObject(anyOjectet) {
   //console.log(`username is ${anyOjectet.username} and password is ${anyOjectet.password}`);
}

handleObject(user); // username is JohnDoe and password is 12345
handleObject({username: "ParthCharan", password: "54321"}); // username is JaneDoe and password is 54321


const newArray = [1, 2, 3, 4, 5];

function getArray(receivedArray) {
    // console.log(receivedArray);
    return receivedArray;
}

console.log(getArray(newArray)); // [1, 2, 3, 4, 5]
console.log(newArray); // [1, 2, 3, 4, 5]

