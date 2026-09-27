function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function(){
    console.log(`${this.name} is greeting`);
}
let p1 = new Person("amro", 23);
p1.greet()

function Employee(name, age, employeeId, position){
    Person.call(this, name, age)
    this.employeeId = employeeId;
    this.position = position;
}

Employee.prototype = Object.create(Person.prototype)
let emp = new Employee("Ahmed", 25, 131231, "Developer")
emp.greet()

Employee.prototype.greet = function(){
    console.log(`${this.name} with id ${this.employeeId} is greeting`);
}
let emp1 = new Employee("Mona", 22, 142531, "HR")
emp1.greet()
let emp2 = new Employee("Ashref", 28, 113134, "Marketing")
emp2.greet()
let emp3 = new Employee("Ameen", 18, 1324324, "Trainee")
emp3.greet()