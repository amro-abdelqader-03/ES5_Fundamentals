export class Student{
    constructor(name, email, id){
        this.name = name;
        this.email = email
        this.id = id
    }

    getInfo(){
        console.log(`Student : name ${this.name} , email ${this.email}, id ${this.id}`)
    }

}