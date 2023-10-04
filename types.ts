// const person: {
//     // this requires the object to have all these properties and of type
//     // can be inferred by TS already
//     name: string,
//     nickname: string,
//     age: number
// } = {

enum Role { ADMIN='admin', READ_ONLY=4, AUTHOR }; // assigns numbers (default); can assign own numbers / texts / mix

const person = {    
    name: 'Derick',
    nickname: 'DC',
    age: 25,
    hobbies: ['coding','playing','watching'],
    role: Role.ADMIN
};

// replace value
// person.role.push('admin'); // push is allowed in tuples; appends to last position
// person.role[1] = 10;

console.log(person);
console.log(person.nickname); // prints nickname only

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase()); // with TS, we can manipulate hobby since TS knows hobbies is of type string, so does hobby
}

console.log(Role.ADMIN)
console.log(Role.READ_ONLY)
console.log(Role.AUTHOR)


if (person.role === Role.AUTHOR) {
    console.log("author")
} else {
    console.log("no")
}