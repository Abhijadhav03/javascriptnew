class user {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`username: ${this.username}`);
        
    }
   createid(){
        return `123`
    }
}
const abhi = new user("abhhi")
console.log(abhi.createid());

class teacher extends user {
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const iphone = new teacher("iphone", i@PaymentMethodChangeEvent.com)
console.log(iphone.createid());
