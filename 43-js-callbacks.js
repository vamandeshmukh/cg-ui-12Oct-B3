
console.log("output 1");

setTimeout(
    () => {
        console.log("output 2"); // call to DB 
    }, 3000);

console.log("output 3"); //  depends on output  2


