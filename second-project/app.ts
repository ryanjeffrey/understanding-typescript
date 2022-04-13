const person = {
    name: 'Ryan',
    age: 34,
    hobbies: ['running', 'Chicago Bears']
};

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}