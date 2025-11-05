//  singleton 

// object literals
 

const mySym = Symbol("key1")

const Jsuser = {
    name : "hitesh",
    "full name":"hitesh choudary",
    age : 19,
   [ mySym]: "key1",
    location: "jaipur",
    email: "hitea@3456",
    isLoggedIn: false,
    lastLoginDays:["monday","Saturday"]

}
//  console.log(Jsuser.email);
//  console.log( typeof Jsuser.mySym);
//  console.log(Jsuser["email"]);
//  console.log(Jsuser["full name"]);


Jsuser.email = "hitesh@chatgpt.com"
//Object.freeze(Jsuser)
Jsuser.email = "hitesh@microsoft.com"
 //console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("hello hs user");
}
console.log(Jsuser.greeting);


Jsuser.greetingTwo = function(){
    console.log(`hello hs user,${this.name}`);
}
console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());
