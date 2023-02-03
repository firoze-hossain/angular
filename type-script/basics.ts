let age: number;
age = 27;
let username: string | string[];
username = 'Firoze';
let instruct: boolean;
instruct = true;

let hobbies: string[];
hobbies = ["Coding", "Cricket"];
let person: {
    name: string,
    age: number
};
person = {
    name: "Firoze",
    age: 32
}
// person = {
//     isEmployee: true
// }
let pepole: {
    name: string,
    age: number
}[];
//type inference
let course: string | number = 'Angular-complete guide';
course = 123;
