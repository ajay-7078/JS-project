// for of


["","",""]


const arr  = [1,2,3,4,5]

for (const num of arr){
 // console.log(num);
}



const greetings = "hello world!"

for (const greet of greetings) {
   // console.log(`each char is  ${greet} `);
    
}


// maps

const map = new Map ()

map.set(`In`,"india")
map.set(`usa`,"america")
map.set(`fr`,"france")

//console.log(map);


for (const [key,value] of map) {
   // console.log(key,` : `, value);
    
}




// const myobject = {
//   ' game1' : 'NFS',
//   ' game2' : 'spiderman'


// }

// for (const [key,value] of myobject) {
//   //  console.log(key, ':' , value);
    
// }



const newobj = {
    js : "javascript",
    cpp: `c++`,
    rb: "ruby",
    switf: `swift by apple`
}
for (const key in newobj) {
  // console.log(newobj[key]);
   
   //console.log(`${key} shortcut is for ${newobj[key]}`);

    
}



const programming = ["js","rb", "java", "cpp"]
for (const key in programming) {

console.log(programming,[key]);

    
}