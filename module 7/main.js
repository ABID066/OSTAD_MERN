/*//Javascript Strick mode:

"use strict"
const x=45;
let xx=54
console.log(xx)





//arrow function
const mufun=(a,b)=>a+b;
console.log(mufun(545,1))






//template literals

let age= 54;
let myself="I'm very old And My age is "+age;
console.log(myself)

let age= 54;
let myself=`I'm very old And My age is ${age}`
console.log(myself)



//array destructuring
const arr=[1, 5, 56, 5];
const [a, b, c, d]=arr;

console.log(c+b)



//object Destructuring and also nested
const person ={
    name:"Abid",
    age: 25,
    city: "Khulna"
}
const {name, age, city}=person;
console.log(city);


const person ={
    name:"Abid",
    age: 25,
    city: "Khulna",
    parent:{
        mother: "Lovely Begum ",
        father: "MD Kamrul Islam"
    }}
    const {name, age, city}=person;
    console.log(city);
    const { parent: {father, mother  } } = person;
    //const {name, age, city,parent:{mother, father}}=person;
    console.log(mother+father);






//default & optional parameter 
function addtwo(a,b=10){
    console.log(a+b)
}
addtwo(10)
addtwo(100,2)





*/
//Rest Paremeter


function sumALL(...num){
    console.log(num[2]+num[3])
}
sumALL(1,2,3,4,5)