// program to solve quadratic equation 
let root1,root2;
// take input from the user 
let a=prompt('enter the first number : ');
let b=prompt('enter the second number: ');
let c=prompt('enter the third number: ');

// calculation discriminant
let discriminant=b*b-4*a*c;
// condition for the real and different roots
if(discriminant>0){
    root1=(-b+Math.sqrt(discriminant))/(2*a);
    root2=(-b-Math.sqrt(discriminant))/(2*a);
    //result
    console.log(`the roots of quadratic equation are ${root1}and ${root2}`);
}else if(discriminant==0){
    root1=root2=-b/(2*a);
    //result
    console.log(`the root of quadratic equation ${root1} and ${root2}`);
}
else{
    let realPart=(-b/(2*a)).toFixed(2);
    let imagPart=(Math.sqrt(-discriminant)/(2*a)).toFixed(2);
    //result
    console.log(`the root of quadratic equation ${realPart}+${imagPart}i and ${realPart}-${imagPart}i `);
}
