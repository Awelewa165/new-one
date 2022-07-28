"use strict";

// let Techno = {
//     color:"grey",
//     model:"Techno",
//     price:"#40,000",
//     noOfPhones: 1
    
// }
// console.log(Techno);
// console.log(Techno.model)
// console.log(Techno["model"]);

// let Techno = {
//     color:"grey",
//     model:"Techno",
//     price:"#40,000",
//     noOfPhones: 1, 
//     Description: function(){
//         let phone = `I want ${this.noOfPhones} ${this.color} ${this.model} phone with a price of ${this.price}`
//         return phone

//     }
    
    
// }
// console.log(Techno.Description());
// console.log(Techno.model)
// console.log(Techno["model"]);

let phones = [ 
{
    color:"grey",
    model:"Samsung",
    price:"#40,000",
    noOfPhones: 1, 
    Description: function(){
        let phone = `I want ${this.noOfPhones} ${this.color} ${this.model} phone with a price of ${this.price}`
        return phone

    }
    
    
},
{
    color:"grey",
    model:"Nokia",
    price:"#40,000",
    noOfPhones: 1, 
    Description: function(){
        let phone = `I want ${this.noOfPhones} ${this.color} ${this.model} phone with a price of ${this.price}`
        return phone

    }
    
    
},
{
    color:"grey",
    model:"Infinix",
    price:"#40,000",
    noOfPhones: 1, 
    Description: function(){
        let phone = `I want ${this.noOfPhones} ${this.color} ${this.model} phone with a price of ${this.price}`
        return phone

    }
    
    
},
{
    color:"grey",
    model:"Techno",
    price:"#40,000",
    noOfPhones: 1, 
    Description: function(){
        let phone = `I want ${this.noOfPhones} ${this.color} ${this.model} phone with a price of ${this.price}`
        return phone

    }
    
    
},
{
    color:"grey",
    model:"iPhone",
    price:"#40,000",
    noOfPhones: 1, 
    Description: function(){
        let phone = `I want ${this.noOfPhones} ${this.color} ${this.model} phone with a price of ${this.price}`
        return phone

    }
    
    
},
{
    color:"grey",
    model:"iTel",
    price:["#40,000","#30,000", "#70,000"], 
    noOfPhones: 1, 
    Description: function(){
        let phone = `I want ${this.noOfPhones} ${this.color} ${this.model} phone with a price of ${this.price[2]}`
        return phone

    }
    
    
}
]
console.log(phones[5].price[1]);
console.log(phones[0].Description());
console.log(phones[1].Description());
console.log(phones[2].Description());
console.log(phones[3].Description());
console.log(phones[4].Description());
console.log(phones[5].Description());
