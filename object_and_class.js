
class Person{
    constructor(first_name, last_name, age, ){
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
    }

    getAge(){
        return this.age;
    }

    sayHello(){
        return 'Hello ' + this.first_name + ' ' + this.last_name;
    }
}

const person = new Person('Marcos', 'Daniel', 29);

console.log(person);
console.log(person.first_name);
console.log(person.getAge());
console.log(person.sayHello());



