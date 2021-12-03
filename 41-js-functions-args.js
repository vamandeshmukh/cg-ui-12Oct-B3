
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
// fun(args);

const fun2 = (abc) => {
    console.log(abc);
}

fun2(20);

const aaa = 10;
fun2(aaa);

