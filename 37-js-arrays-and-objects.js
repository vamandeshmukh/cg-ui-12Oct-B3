
function fun2() {
    console.log('fun2 output');
}



class SomeClass {

    fun() {
        console.log('fun output');
    }
}

// SomeClass obj = new SomeClass(); // Java 
let obj = new SomeClass(); // JavaScript 

obj.fun();
fun2();

// In JS, objects are created oin two ways - 
// 1. object of a class 
let obj2 = new SomeClass(); // JavaScript 
// 2. proper JavaScript object / json object  
let obj3 = { eid: 101, ename: 'Sonu', salary: 10.5 };
let obj4 = { cid: 201, cname: 'aaa', address: { street: 'abc', pin: 123456 }, phones: [1234, 5678] };

console.log(obj4);