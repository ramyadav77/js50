/*
let a = 5;
let b = 6;
let temp;
temp = a;
a = b;
b = temp;
console.log(`a after change${a}`);
console.log(`b after change${b}`);
*/

/*
let a=prompt('enter a:');
let b=prompt('enter b:');

// object destructure
[a,b]=[b,a]

console.log(`the vslue of a after swap ${a}`);
console.log(`the vslue of a after swap ${b}`);
*/

let a=parseInt(prompt('enter num1'));
let b=parseInt(prompt('enter num2'));

a=a+b;
b=a-b;
a=a-b;
console.log(`the vslue of a after swap ${a}`);
console.log(`the vslue of a after swap ${b}`);
