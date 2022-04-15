// // Explicit type assignment
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: 'Ryan',
//     age: 34,
//     hobbies: ['running', 'Chicago Bears'],
//     role: [2, 'author']
// };
// Enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['running', 'Chicago Bears'],
    role: Role.ADMIN
};
if (person.role === Role.AUTHOR) {
    console.log('is author');
}
// person.role.push('admin');
// person.role[0] = 10;
// console.log(person.name);
// for (const hobby of person.hobbies) {
//     console.log(hobby.toUpperCase())
// }
