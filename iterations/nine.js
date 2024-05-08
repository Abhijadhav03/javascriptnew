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

// const myTotal =myNums.reduce(function(acc,currval){
//     console.log(`acc:${acc} and currval: ${currval} `);
//     return acc + currval
// },0
// )

//  myTotal = myNums.reduce((acc, curr) => acc+currval,0)
// console.log(myTotal);

const shoppingcart = [
    {
        itemname: "js course",
        price:1999
    },
    {
        itemname: "mobile dev course",
        price:4999
    },
    {
        itemname: "data science course",
        price:3999
    },
    {
        itemname: "react course",
        price:2999
    }
]

const priceToPay = shoppingcart.reduce((acc,item) => acc+item.price,0)
console.log(priceToPay);