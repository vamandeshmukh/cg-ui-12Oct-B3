//  35-js-truthy-falsy.js
// console.log(10 / 0);


// ename != null 
// ename != 0
// if(ename has any type of value) {

// JS concept - any type of variable can be treated as a boolean variable. 

// falsy:  0, '', false, NaN, null, undefined 
// truthy: rest of the values  

let ename; // number string boolean 

ename = 10 / 0; // 0, 1, 4248, 'abc', true, false, null, 

if (ename)
    console.log(`truthy`);
else
    console.log(`falsy`);


