 /*
 const height=parseInt(prompt('enter height of tringle:'));
 const base =parseInt(prompt('enter base of tringle:'));

 const area=(base*height)/2;
 console.log(`the area of tringle is ${area}`)
*/
const side1=parseInt(prompt('enter the side1:'));
const side2=parseInt(prompt('enter the side1:'));
const side3=parseInt(prompt('enter the side1:'));

const s=(side1+side2+side3)/2;

const area=Math.sqrt(s*(s-side1)*(s-side2)*(s-side3));
console.log(`area is ${area}`);
