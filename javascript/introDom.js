let para = document.getElementById('para')
let heading = document.getElementsByClassName('heading')
let tag = document.getElementsByTagName('p')
let select = document.querySelector('#para')
let selectAll = document.querySelectorAll('.heading')
let list = document.querySelectorAll('ul > li')
// let list = document.querySelectorAll('ul')

selectAll.forEach((fruit)=>{
    
    // console.log(fruit.innerHTML);

    fruit.innerHTML += `<p>orange</p>`
})

console.log(tag);
// console.log(selectAll);

// selectAll.forEach((singleTag)=>{
//     console.log(singleTag);
// })
selectAll.forEach((singleTag)=>{
    console.log(singleTag.textContent);
})

// let headingAll = Array.from(heading)
// console.log(headingAll);