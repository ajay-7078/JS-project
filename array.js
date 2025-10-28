// array

const myArr = [3,4,5,6,78,8]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[0]);


//  array methods 
 
//  myArr.push(6)
//   myArr.push(7)
//    myArr.pop()
//  console.log(myArr);


//  myArr.unshift(9)
//   myArr.unshift()

//  console.log(myArr);

//  console.log(myArr.includes(9));
//  console.log(myArr.indexOf(6));
 
const newArr = myArr.join()

// console.log(newArr);
// console.log(myArr);



// slice, splice

// console.log("A", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
// console.log("B", myArr);



const myn2 = myArr.splice(1,3)
// console.log(myn2);
// console.log("c", myArr);


// Array second part 

const marvel_heros = ["thor", "ironman","spiderman"]
const dc_heros = ["supreman","flash","batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros [3][1]);


// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);


const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);



const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);




console.log(Array.isArray("hitesh"));
console.log(Array.from("hitesh"));



console.log(Array.from({name : "hitesh"}));  //interesting


let score1 = 100 
let score2 = 200 
let score3 = 300 

console.log(Array.of(score1,score2,score3));