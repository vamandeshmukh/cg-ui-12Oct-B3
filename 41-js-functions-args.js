
const fun = (args) => {
    console.log('output from fun function');
    args();
}

// TypeError: args is not a function
// const args = 10;
// fun(args);

// TypeError: args is not a function
// fun();


const args = () => {
    console.log('output from args function');
}

// success 
fun(args);


