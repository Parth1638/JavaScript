const mynums = [1,2,3,4,5,6]
mynums.map( (num) => num + 10)


const newnum = mynums.map( (num) => num * 10 ).map( (num) => num + 1).filter( (num) => num >= 21)
console.log(newnum);


