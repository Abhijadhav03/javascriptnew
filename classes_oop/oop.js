const User = {
    username: "abhihsek",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
        //console.log("got user details from database");
        //console.log(`username: ${this.username}`);
        console.log(this);
    }
}
// console.log(User.username);
// // console.log(User.getUserDetails());
// console.log(this);


// const promiseOne = new promise()
// const date = new Date()

function user(username, loginCount, isloggedin){
    this.username = username;
    this.loginCount = loginCount;
    this.isloggedin = isloggedin;
    return this
}

const userone = new user("abhishek", 14, true)
const userTwo = new user("abhishek new", 11 , false)
console.log(userone);
console.log(userTwo); 