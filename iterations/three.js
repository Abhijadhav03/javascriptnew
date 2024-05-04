// for of 

// ["", "", ""]
// [{}, {},{}]

const arr = [ 1,2,3,4,5]
for (const num of arr) {
    console.log(num);
}

const greetings = "helllo world "
for (const greet of greetings) {
    console.log(` each character is ${greet}`);
}

//maps 

const map = new Map()
map.set('IN',"india")
map.set('USA',"United statesn of america")
map.set('fr',"france")
map.set('IN',"india")
console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-',value);
    
}

const myObject = {
'game1': 'NFS',
'game2': 'spiderman'
}

// for (const [key,value] of myObject){
//     console.log(key,':-',value);
// }

