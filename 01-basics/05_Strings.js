const name = "Abhishek "

const repoCount = 12

// console.log(name + repoCount); // Not recommended 

// Use string interpolation

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Abhi-asd')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);

// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

// const newString = gameName.substring(0,3)
// console.log(newString);

// const anotherString = gameName.slice(-7,4)
// console.log(anotherString);

const anotherStringoOne = "     Abhishek     "
console.log(anotherStringoOne);
console.log(anotherStringoOne.trim());   // removes the extra space

const url ="https://abhi.com/abhi%20rao"
console.log(url.replace('%20','-'));
console.log(url.includes('abhi'));

console.log(gameName.split(' '));










