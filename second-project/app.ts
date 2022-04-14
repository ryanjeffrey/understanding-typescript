const person = {
    name: 'Ryan',
    age: 34,
    hobbies: ['running', 'Chicago Bears'],
    role: [2, 'author']
};

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}