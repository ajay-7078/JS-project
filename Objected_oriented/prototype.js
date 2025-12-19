// let Myname = "hitesh     "

// console.log(Myname.truelength);


let myHeroes = [ "thor", "spiderman"]


let heroPower ={
thor: "hammer",
spiderman: "sling",


getSpiderPower: function() {
    console.log(`spidy power is ${this.spiderman}`);
    
   }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
    
}
Array.prototype.heyhitesh = function(){
    console.log(`hitesh says helo`);
    
}
//heroPower.hitesh()
myHeroes.hitesh()
myHeroes.heyhitesh()
//heroPower.heyhitesh()

// inheritace 
const User = {
    name: "chai"
   // email: "ak@.gmail.com"
}


const Teacher = {
   makeVideo: true
}

const TeachingSupport =  {
    isAvailable: false
}

const  TASupport = {
    makeAssigment: 'js assignmnet',
    fullTime: true,
   __proto__: TeachingSupport
}
__proto__ = User


// modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "ChaiAurCode"

String.prototype.trueLenght = function(){
    console.log(`${this}`);

   console.log(`True length is: ${this.trim().length}`);
   
   
}

anotherUsername.trueLenght()
"hitesh".trueLenght()
"iceTea".trueLenght()