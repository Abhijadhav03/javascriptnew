// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);
// // Expected output: 10

const myNums = [1,2,3]

const myTotal =myNums.reduce(function(acc,currval){
    console.log(`acc:${acc} and currval: ${currval} `);
    return acc + currval
},0
)
console.log(myTotal);