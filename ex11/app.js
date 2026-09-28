class Person{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    getInfo(){
        console.log(`Person : name ${this.name} , email ${this.email}`)
    }
}

class Student extends Person{
    constructor(name, email, id){
        super(name, email);
        this.id = id
    }

    getInfo(){
        console.log(`Student : name ${this.name} , email ${this.email}, id ${this.id}`)
    }

}

let person = new Person("Amro", "amro@gmail.com")
let student = new Student("Ahmed", "ahmed@gmail.com", 3123)

person.getInfo()
student.getInfo()