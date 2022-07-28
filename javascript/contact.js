let text = "The character \\ is called backslash.";
// console.log(text)
text = "The character \n is called backslash.";

console.log(text)


let str = "     Apple, Banana,     Kiwi      ";
// let newstr = str.slice(7, 13)
// let newstr = str.toUpperCase();
let newstr = str.trim();
console.log(newstr); 


let a = 5;
console.log(a)
 a = 10;
console.log(a);

var b = 5;
console.log(b);
var b = 10;
console.log(b);


// let p = parseFloat(prompt("please enter a number"));
// let v = parseFloat(prompt("please enter a number"));
// // let w = Number(v) + Number(p)
// let w = v + p
// // document.write(w, typeof w);
// console.log(w, typeof w);
// // alert(v);

/*
x(+) = firstResultPlus
x(-) = firstResultMinus
b = firstQuadValue
a = secondQuadValue
c = thirdQuadValue
*/

// let firstQuadValue = Number(prompt("please enter a value"))
// console.log(typeof firstQuadValue)
// let secondQuadValue = Number(prompt("please enter a value"))
// console.log(typeof secondQuadValue)
// let thirdQuadValue = Number(prompt("please enter a value"))
// console.log(typeof thirdQuadValue)


// let firstQuadValueSqr = Math.pow(Number(firstQuadValue), 2)
// console.log(typeof firstQuadValueSqr)
// let sqrtVal = Math.sqrt(Number(firstQuadValueSqr) - (4 * Number(secondQuadValue) * Number(thirdQuadValue)))
// console.log(typeof sqrtVal)
// let denomVal = 2 * Number(secondQuadValue)
// console.log(typeof denomVal)

// let firstResultPlus = (-firstQuadValue + sqrtVal)/denomVal
// console.log(typeof firstResultPlus)
// // let firstResultPlus = (-firstQuadValue + Math.sqrt(Math.pow(firstQuadValue, 2) - (4 *secondQuadValue * thirdQuadValue ))) / (2 * secondQuadValue)
// // console.log(typeof firstResultPlus)

// // let firstResultMinus = (-firstQuadValue - Math.sqrt(Math.pow(firstQuadValue, 2) - (4 *secondQuadValue * thirdQuadValue ))) / (2 * secondQuadValue)
// // console.log(typeof firstResultMinus)

// // document.write(firstResultPlus, firstResultMinus)
// document.write(firstResultPlus)


let firstQuadValue = Number(prompt("please enter a value+"))
let secondQuadValue = Number(prompt("please enter a value"))
let thirdQuadValue = Number(prompt("please enter a value"))
// document.write(firstQuadValue + secondQuadValue + thirdQuadValue);

let firstQuadValueSqr = Math.pow(firstQuadValue, 2)
// document.write(firstQuadValueSqr)

let quadSqrVal = (firstQuadValueSqr - (4 * secondQuadValue * thirdQuadValue))
// document.write((quadSqrVal))
// console.log(quadSqrVal);

let sqrtVal = Math.sqrt(quadSqrVal)
// let sqrtVal = quadSqrVal ** (-0.5)
// console.log(sqrtVal);

let denomVal = 2 * secondQuadValue
// document.write(denomVal)

// let firstResultPlus = (Number(-firstQuadValue) + Number(sqrtVal))/Number(denomVal)


let firstResultPlus = (-(firstQuadValue) + sqrtVal)/denomVal
let firstResultMinus = (-(firstQuadValue) - sqrtVal)/denomVal
// console.log(Math.sqrt(-575))
// console.log(firstQuadValue, "quad value ", sqrtVal, " sqrt val ", denomVal, " denom ")
document.write(firstResultPlus, firstResultMinus);
// document.write(firstResultPlus)
