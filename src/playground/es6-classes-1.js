class Person {
    //Son atributos default.
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGretting() {
        // return 'Hi . Iam ' + this.name + '!';
        //template string inyectar valores javascript a strings.
        //ctr + alt + tecla de cerrar llave
        return `Hi. I am ${this.name}!`;
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old`;
    }
}

const me = new Person('Humberto Leal', 90);
console.log(me.getDescription());

const other = new Person();
console.log(me.getDescription());