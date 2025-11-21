const coding = ["js", "java", "PYTHON", "CPP" ]

// coding.forEach( function  (item)  {
//     console.log(item);
    
// } )  

// coding.forEach( (i) =>{
// console.log(i);

// })



// function printme(item){
//     console.log(item);
    
// }
// coding.forEach(printme)


coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
    
})

const mycoding = [
    {
        languageName: "java",
        languageNamefile:  "js"
    },
    {
        languageName: "c++",
        languageNamefile:  "cpp"
    },
    {
        languageName: "py",
        languageNamefile:  "py"
    }, 
]
mycoding.forEach( (item)  => {
    console.log(item.languageName);
}) 