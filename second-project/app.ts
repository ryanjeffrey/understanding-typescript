const person = {
    name: 'Ryan',
    age: 34,
    hobbies: ['running', 'Chicago Bears'],
    role: [2, 'author']
};

person.role.push('admin');
person.role[1] = 10;

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}