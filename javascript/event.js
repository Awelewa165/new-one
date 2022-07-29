let list = document.querySelector("ul")
let button = document.querySelector(".add")
let div = document.querySelector(".pitems")
let btn = document.querySelector(".increase")
let fruitList = document.querySelector(".fruit")
let fruitBtn = document.querySelector(".fruitList")

let fruits = ["Banana", "Orange", "Apple", "Mango"]

// fruitBtn.addEventListener("click", ()=>{
//     fruits.forEach((fruit)=>{
//         fruitList.innerHTML += `<li>${fruit}</li>`
//     })
// })

fruits.forEach((fruit)=>{
    fruitBtn.addEventListener("click", ()=>{
        fruitList.innerHTML += `<li>${fruit}</li>`
    })
})

// button.addEventListener("click", ()=>{
//     list.innerHTML += `<li>new item</li>`
// })
//  button.removeEventListener("click", ()=>{
//     list.innerHTML += `<li>new item</li>`
// })

let addItem = ()=>{
        div.innerHTML += `<p>new item</p>`
    // const liContent = document.createElement("li");
	// liContent.textContent = "new List";
	// div.prepend(liContent);
}

// console.log(addItems());

let listItems = document.querySelectorAll(".listItems")
listItems.forEach((listItem)=>{
    listItem.addEventListener("click", (e)=>{
        console.log(e.target.tagName);
        // console.log(e.target);
        // listItem.style.textDecoration = "line-through"
        // listItem.style.backgroundColor = "blue"
        // e.target.remove()
    } )
})





