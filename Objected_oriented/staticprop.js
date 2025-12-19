class User {
    constructor(username){
        this.username = username

    }
    logMe(){
        console.log(`username: ${this.username}`);
        
    }

    createId(){
        return `122`
    }
}

const hitesh =  new User("hitesh")
//console.log(hitesh.createId());


class Teacher extends User { 
    constructor( username,email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher( "iphone","iphone@com" )
console.log(iphone.createId());

