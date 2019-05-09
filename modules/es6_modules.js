//install node and npm
//execute and install
//npm install -g http-server
//http-server

export class Person{
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

export const msg = 'Export msg';
