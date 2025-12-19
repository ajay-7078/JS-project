class User {
    constructor(email, password){
        this.email = email,
        this.password = password
    }

    get email(){
        return this._email.touppercase()
    }
    set email(value){
         this._email = value  
         }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}
 
const hitesh = new User ("hitwe!.com", "abc")
console.log(hitesh.email);
