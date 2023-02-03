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
