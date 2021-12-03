
// args - primitive types, objects, functions     

// const fun = (args) => {
//     console.log("fun");
// }

// fun();
// args - objects 

const fun2 = (args) => {
    console.log(args);
    console.log(`salary : ` + args.salary);
    console.log(`total pay : ` + (args.salary + 10000));
}

const myData = {eid : 101, ename : 'Sonu', salary : 45000};

fun2(myData);

// public int addNums(int i, int j) {}

const fun3 = (args, args2) => {
    console.log(args);
    console.log(args2);
}

const myData2 = {eid : 101, ename : 'Sonu', salary : 45000};
const myData3 = {eid : 103, ename : 'Monu', salary : 45000};

fun3(myData2, myData3);

// setTimeout(() => {    
// }, timeout);

