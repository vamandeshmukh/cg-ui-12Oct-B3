
// problems in asynchronous programming 
// console.log("output 1");
// const getFun = () => {
//     setTimeout(() => {
//         return { message: "fun meesage" }; // react to spring boot 
//     }, 2000);
// }
// // TypeError: Cannot read property 'message' of undefined
// const fun = getFun();
// console.log(fun.message); //  depends on output  2

// solution 1. - use callback 

console.log("output 1");
const getFun = (abc) => {
    setTimeout(() => {
        abc({ message: "fun meesage" }); // callback 
    }, 2000);
}

const funCall = (arg) => {
    console.log(arg.message);
}

// success 
getFun(funCall);




