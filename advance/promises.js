
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("p1 Success"), 3000);
// });
// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => reject("p2 fail"), 1000);
// });
// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("p3 Success"), 2000);
// });

// Promise.all([p1, p2, p3])
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
// //     });



// const p = new Promise((resolve,reject) => {
//     resolve("promise is resolved");
// });

// async function getdata() {
//     return p;

// }
// const dataPromise = getdata();
// dataPromise.then((res)=> console.log(res));

const p = new Promise((resolve,reject) => {
    resolve("promise is resolved");
});
   async function handlepromise(){
    const val = await p;
    console.log(val);
    
   }
handlepromise(); 

function getdata(){
    p.then((res)=> console.log(res));
    
}
getdata();