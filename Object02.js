//const tinderUser = new Object()     //singleton obj

const tinderUser = {}   //non singleton obj



tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false


// console.log(tinderUser);


const regularUser = {
    email: "sonme@gmail.com",
    fullname: {
        userfullname:{
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a",2:"b" }
const obj2 = {3: "a", 4:"b"}

//const obj3 = {obj1,obj2}
//const obj3 = object.assign(obj1,obj2)

const obj3 = {...obj1, ...obj2}
//console.log(obj3);


const users = [
    {
        id: 1,
        email: "hasflks"
    },
      {
        id: 1,
        email: "hasflks"
    },
      {
        id: 1,
        email: "hasflks"
    },
]


users[1].email
// console.log(tinderUser);


// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnproperty("isLogged"));


const course = {
    coursename: "js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}
//course.courseInsdtructor

const {courseInstructor : instructor} = course
console.log(courseInstructor);



const navbar = ({company}) => {///de-structure

}



// {
//    " name": "ajay",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {},
    {},
]