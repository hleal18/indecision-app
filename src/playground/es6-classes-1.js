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

//se va a crear una subclase de Person
class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major;        
    }
    hasMajor(){
        return this.major;
    }
    getDescription() {
        let description = super.getDescription();
        
        if(this.hasMajor()) {
            description += `. Their major is ${this.major}`
        }

        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGretting(){
        let gretting = super.getGretting();
        if(this.homeLocation){
            gretting += ` I'm visiting from ${this.homeLocation}`;
        }
        return gretting;
    }
}



const me = new Traveler('Humberto Leal', 90, 'Colombia');
console.log(me.getGretting());

const other = new Student();
console.log(other.getGretting());