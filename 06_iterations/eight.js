const arr = [1,2,3,4,5]

// const mytotal = arr.reduce(function (acc, currval ){
//     console.log(`acc: ${acc} and currval: ${currval} `);
    
//     return acc + currval
// }, 0)


// const mytotal = mynums.reduce( (acc,curr) => acc+curr, 0 )

// console.log(mytotal);


const shoppingCart = [
    {
        itemname : "js.course",
        price : 2999
    },
    {
        itemname : "python",
        price : 1999
    },
    {
        itemname : "java",
        price : 1599
    },
    {
        itemname : "Ai",
        price : 3999
    },

]

const pricetopay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(pricetopay);
