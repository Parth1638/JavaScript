const lang = ["cpp","c","java","js"]
// lang.forEach( function (item){
//      console.log(item)
// } )

// lang.forEach( (item) => {
//     console.log(item)
// } )

// function printme(item){
//     console.log(item)
// }

// lang.forEach(printme)

// lang.forEach( (item, indexed, arr) => {
//     console.log(item, indexed, arr);
    
// } )

const mycoding =[
    {
    langname:"js",
    langfilename: ".js"
    },
    {
    langname:"java",
    langfilename: ".java"
    },
    {
    langname:"python",
    langfilename: ".py"
    }

]

mycoding.forEach( (item) =>{
    console.log(item.langname);
    
} )