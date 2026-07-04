// Primitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt



const score =100
const scoreValue =1.10

const isLoggedIn = false
let userEmail;

const outsideTemp = null

const id = Symbol('123')
const anotherId= Symbol('123')

console.log(id === anotherId);

const bigNumber = 9876543213456n

// Reference(Non primitive)

// Array, Objects, Functions

const hero = ["shaktiman","naagraj","doga"];
let myObj={
    name: "Abhishek",
    age : 22
}

const myFunction = function(){
    console.log("Hello World");
    
}

console.log(typeof myFunction);
console.log(typeof hero);
