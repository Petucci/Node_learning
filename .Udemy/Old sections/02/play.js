const person = {
    name: 'Matevž',
    age: 23,
    Greet() {
        console.log(`My name is ${this.name}`);
    }
}

const hobbies = ['hobby', 'Biking'];

hobbies.forEach((value, index) => {
    console.log(`[${index}] => ${value}`);
})

console.log(hobbies.map((hobby, index) => `${hobby}_${index}`));

/* 
    Spread & Rest
    (...variable) -> in input packs the input paramters as array
    ...variable -> can also unpack arrays and classes 

*/

let copiedPerson = {...person};
console.log(person);
console.log(copiedPerson);

const copiedArray = [...hobbies];
copiedArray.push('test');
console.log(hobbies);
console.log(copiedArray);


// rest -> all input parameters are treated as an Array
const toArray = (...args) => args
console.log(toArray(12,3))

// Object destructuring

const outputName = ({name}) => {
    console.log(`desctructured name: ${name}`);
}

outputName(person);

let {name, age} = person;
console.log(name);
console.log(age);

var [hobbie1, hobbie2] = hobbies;
console.log(hobbie1, hobbie2)