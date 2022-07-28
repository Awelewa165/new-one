let para = document.getElementById('para')
let heading = document.getElementsByClassName('heading')
let tag = document.getElementsByTagName('p')
let select = document.querySelector('#para')
let selectAll = document.querySelectorAll('.heading')
let list = document.querySelectorAll('ul')
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

select.innerHTML += `<p>pawpaw</p>`
console.log(list);

let score = 100;
// let updateTag = document.querySelectorAll(".msg");
// console.log(updateTag);
// selectAll.forEach((singleTag) => {
// 	singleTag.innerHTML += `<h2>Congrats, you scored a ${score}%</h2>`;
// });

let peopleArr = ["Mason", "Tunde", "Joy", "Mercy"];
let listOfPeople = document.querySelector(".people")
peopleArr.forEach((person)=>{
    listOfPeople.innerHTML += `<li>${person}</li>`
})

let link = document.getElementById("search")
console.log(link);
let linkAtt = link.getAttribute("href")
console.log(linkAtt);
let setAtt = link.setAttribute("href", "www.google.com")
let classAtt = link.setAttribute("class", "error")
link.textContent += " innkeeper"
link.style.fontSize = "50px"
// link.setAttribute("style", "font-size: 50px")
// link.setAttribute("style", "font-weight: 900")
link.style.fontWeight = 900
link.classList.add("okay")
// link.classList.remove("success")
link.classList.toggle("success")
link.classList.toggle("success")
console.log(link.classList);

let divHeadings = document.querySelector("#headings")
let divHeadingsArr = Array.from(divHeadings.children)
divHeadingsArr.forEach(function(singleClass){
    singleClass.classList.add("error")
})
// console.log(divHeadings.lastElementChild);

function primeNum(num){
    for(i = 1; i <= 20; i++) {
    if(num % i === 0 && i % 1 === 0 && num % 1 === 0) {
        console.log(i);
    }
}

}

primeNum(10)
