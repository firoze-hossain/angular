let age: number;
age = 27;
let username: string | string[];
username = 'Firoze';
let instruct: boolean;
instruct = true;

let hobbies: string[];
hobbies = ["Coding", "Cricket"];
type person = {
    name: string,
    age: number
}
let person: person;
person = {
    name: "Firoze",
    age: 32
}
// person = {
//     isEmployee: true
// }
let pepole: person[];
//type inference
let course: string | number = 'Angular-complete guide';
course = 123;

// functions and types
function add(a: number, b: number): number {
    return a + b;
}

function print(value: any) {
    console.log(value);
}

//generics
function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array]
    return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1);
const stirngArray = insertAtBeginning(['a', 'b', 'c'], 'd');
//updatedArray[0].split('');
