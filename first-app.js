const name = "Max";
let age = 19;
const hasHobbies = false;

age = 18;

const summarized = (name, age) => {
    return `Name is ${name}, age is ${age}`
}

function summarizeUser(name, age) {
    return `Name is ${name}, age is ${age}`
}

const add = (a,b) => a + b

console.log(summarizeUser(name, age));
console.log(summarized(name, age))
console.log(add(1,2))