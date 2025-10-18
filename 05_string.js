const name = "hitsh"
const repoCount = 50

//console.log(name + repoCount + "value");
  console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-ch')

console.log(gameName[3]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('t'));
 
const newstring = gameName.substring(0,4)
 console.log(newstring);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);



const newstringOne = "   hitesh        "
console.log(newstringOne);
console.log(newstringOne.trim());

const url = "https://hitesh.com/hitesh%20choudary";

console.log(url.replace(`%20`,`-`));


console.log(url.includes("hitesh"));

console.log(gameName.split('_'));
console.log("3"+8);
