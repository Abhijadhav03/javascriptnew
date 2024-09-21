function multipleby5(num){
    this.num = num 
    return num*5
}

multipleby5.power = 2

console.log(multipleby5(5));
console.log(multipleby5.power);
console.log(multipleby5.prototype);

function createuser(username, score){
    this.username = username
    this.score = score
}

createuser.prototype.increment = function(){
    score++
}
createuser.prototype.printme = function(){
    console.log(`score is ${this.score}`);
    
}
const chai = new createuser("abhi", 25)
const tea= new createuser("tea", 250)

chai.printme()




