let paras = document.querySelectorAll("p")
console.log(paras);

paras.forEach((para)=>{
    if(para.textContent.includes("error")){
        para.classList.add("error")
    }
    else if(para.textContent.includes("success")){
        para.classList.add("success")
    }
    else{
        para.innerHTML += `<span> no word</span>`
    }
})


let timer = document.querySelector("h1")
let date = new Date()
let hour = date.getHours()
let minutes = date.getMinutes()
let seconds = date.getSeconds()

timer.textContent = `${hour}: ${minutes}: ${seconds}`

let dataList = [
	{
		id: 1,
		name: "Ada",
		age: 10,
		status: "Admitted",
	},

	{
		id: 2,
		name: "Mercy",
		age: 15,
		status: "UnAdmitted",
	},

	{
		id: 3,
		name: "John",
		age: 20,
		status: "UnAdmitted",
	},
	{
		id: 4,
		name: "Peter",
		age: 10,
		status: "Admitted",
	},
];

let table = document.querySelector("tbody")
dataList.forEach((person)=>{
    table.innerHTML += `
        <tr>
            <td>${person.id}</td>
            <td>${person.name}</td>
            <td>${person.age}</td>
            <td>${person.status}</td>
        
        </tr>
    `
})

