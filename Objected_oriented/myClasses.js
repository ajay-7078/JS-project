// ES6

const { useEffect } = require("react");

class User{
    constructor(username, email, password){
        this.userame = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return`${this.password}123`
    }
  changeUesrname(){
    return`${this.userame.toUppercase()}`
  }
}

const chai = new User("chai", "cahie@fs.com", "ABC")
console.log(chai.encryptPassword());
console.log(chai.changeUesrname());

//behind the scene

function User(username, email, password){
            this.userame = username;
        this.email = email;
        this.password = password

}

User.prototype.encryptPassword = function(){
    return `${this.encryptPassword()}abc`

}

const tea = new User("chai", "cahie@fs.com", "ABC")
console.log(tea.encryptPassword());
console.log(tea.changeUesrname());