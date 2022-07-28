// let timeOfDay = new Date();
// let hours =  timeOfDay.getHours();
// let mins = timeOfDay.getMinutes();
// let seconds = timeOfDay.getSeconds();
// let day = timeOfDay.getDay();
// // let fullTime = `${hours}:${mins}:${seconds}`

// if (hours > 15) {
//     console.log('it is noon');
    
// } else{
//     console.log('it is still morning');
// }

// console.log(hours);

// let weeks = [ 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

// if (day === 0){
//     console.log(weeks[0]);
// }
// else if (day === 1) {
//     console.log(weeks[1]);   
// }
// else if (day === 2) {
//     console.log(weeks[2]);   
// }
// else if (day === 3) {
//     console.log(weeks[3]);   
// }
// else if (day === 4) {
//     console.log(weeks[4]);   
// }
// else if (day === 5) {
//     console.log(weeks[5]);   
// }
// else {
//     console.log(weeks[6]);   
// }

let months = [ 'January' , 'Feburary' , 'March' , 'April' , 'May' , 'June' , 'July' , 'August' , 'September' , 'October' , 'November' , 'December' ]
if (months === 0){
    console.log(months[0]);
}
else if (months === 1){
    console.log(months[1]);
}
else if (months === 2){
    console.log(months[2]);
}
else if (months === 3){
    console.log(months[3]);
}
else if (months === 4){
    console.log(months[4]);
}
else if (months === 5){
    console.log(months[5]);
}
else if (months === 6){
    console.log(months[6]);
}
else if (months === 7){
    console.log(months[7]);
}
else if (months === 8){
    console.log(months[8]);
}
else if (months === 9){
    console.log(months[9]);
}
else if (months === 10){
    console.log(months[10]);
}
else if (months === 11){
    console.log(months[11]);
}


// for(i= 2; i <= 6; i++ ){
//     console.log(i);
// }
// for(i= 2; i <= 7; i+=3 ){
//     console.log(i);
// }

// let fruits = ["Banana", "Orange", "Apple", "Mango"];

// for(i= 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }

let fruits = ["Banana", "Orange", "Apple", "Mango"];

// for(i= 0; i < fruits.length; i++){
//     if(fruits[i] === 'Apple'){
//         break;
//     }
//     console.log(fruits[i]);
// }
// for(i= 0; i < fruits.length; i++){
//     if(fruits[i] === 'Apple'){
//         continue;
//     }
//     console.log(fruits[i]);
// }

for (i=1; i<=10; i++){
    if(i%2 === 0){
        continue;
    }
    console.log(i);
}

// fruits.forEach((f)=>{
//     console.log(f);

// })

fruits.map((fruit , index)=>{
    console.log(index, fruit);
})