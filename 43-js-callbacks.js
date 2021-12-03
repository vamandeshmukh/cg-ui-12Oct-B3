
console.log("output 1");

const getFun = () => {

    setTimeout(() => {
        return { message: "fun meesage" };
    }, 2000);
}

const fun = getFun();

console.log(fun.message); //  depends on output  2




