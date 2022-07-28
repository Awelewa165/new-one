2// // // let cars = ["volvo", "toyota", 1, 7]
// // // cars[0] = "benz"
// // // cars[10] = "benz"
// // // cars.splice(4,6)
// // // console.log(cars);
// // // let newElement = cars.push("volvo", 1);
// // // console.log(cars);
// // // console.log(cars.join("-"));
// // // console.log(cars.length);
// // // console.log(cars[9]);


// // var fruits = ["Banana", "Orange", "Apple", "Mango"];
// // console.log(fruits.sort().reverse());
// // // console.log(fruits.reverse());

// // var points = [40, 100, 1, 5, 25, 10];
// // // console.log(points.sort());
// // let asSortedPoints = points.sort(function(a, b){return a - b});
// // console.log(asSortedPoints);
// // // console.log(asSortedPoints[0]);
// // console.log(Math.max.asSortedPoints);
// // console.log(asSortedPoints[5]);



// // let desSortedPoints = points.sort(function(a, b){return b - a});
// // console.log(desSortedPoints);
// // console.log(desSortedPoints[0]);
// // console.log(desSortedPoints[5]);


// function myFunction(P, R, T) {
//     // return p1 * p2;   // The function returns the product of p1 and p2
//     let PRT = (P*R*T)/100
//     return PRT 
     

//   }


//   function adNum(b, c) { 
// let bc = b + c
// return bc
 
//   }
// let x = adNum(3, 5)
  
//   console.log(x);


//   myFunction(5, 3)
//   console.log(myFunction(5, 3, 4));
//   console.log(myFunction(6, 3, 6));
//   console.log(myFunction(5, 8, 7));
//   console.log(myFunction(6, 9, 0));
//   console.log(myFunction(9, 0, 1));
//   console.log(myFunction(2, 3, 1));


//   function sayHi(){
//     document.write("Good morning");
//   }
// console.log(sayHi());
// 63

let SayHi = function() {
console.log(`Good Morning`);
}

console.log(SayHi());

// let Greeting = function(name, surname) {
// let timeOfDay = new Date();
// let hours =  timeOfDay.getHours();
// let mins = timeOfDay.getMinutes();
// let seconds = timeOfDay.getSeconds();
// // let fullTime = `${hours}:${mins}:${seconds}`
// let fullTime = `${hours}hrs:${mins}mins:${seconds}secs`


//   // console.log(`Good Morning ${name} ${surname}, It is ${fullTime}`);
//   return `Good Morning ${name} ${surname}, It is ${fullTime}`);
// }

let Greeting = (name, surname) => {
  let timeOfDay = new Date();
  let hours =  timeOfDay.getHours();
  let mins = timeOfDay.getMinutes();
  let seconds = timeOfDay.getSeconds();
  let fullTime = `${hours}:${mins}:${seconds}`
  // let fullTime = `${hours}hrs:${mins}mins:${seconds}secs`
  console.log(`Good Morning ${name} ${surname}, It is ${fullTime}`);
}

console.log(Greeting("Awe"));
console.log(Greeting("Esther", "Kekere"));
console.log(Greeting());
