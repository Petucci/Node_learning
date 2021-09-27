const myPerson = {
    name: 'Matevž',
    age: 23,
    Greet() {
        console.log(`My name is ${this.name}`);
    }
}

const printName = ({name, age}) => {
    console.log(name);
    console.log(personData.name);
}

const {name, age} = myPerson;
console.log(name);
console.log(age);