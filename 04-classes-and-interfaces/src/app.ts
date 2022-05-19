interface Greetable {
    name: string;

    greet(phrase: string): void;
}

class Person implements Greetable {
    name: string;
    age = 34;

    constructor(n: string) {
        this.name = n;
    }

    greet(phrase: string) {
        console.log(phrase + " " + this.name);
    }
}

let user1: Greetable;

user1 = new Person('Ryan');

user1.greet('Hi there - I am');