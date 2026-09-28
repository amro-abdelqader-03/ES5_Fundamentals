user = {
    name: "amro",
    email: "amro@gamil.com",
    age: 23,
    address: "Amman-Jordan"
}

const {name, age, height} = user;

console.log(name)
console.log(age)
console.log(height)

console.log("=================================================");

skills = ["python", "react", "PHP", "Laravel"]

const [first, third] = skills
console.log(first);
console.log(third)

console.log("=================================================");

function createUser(name="Ahmed", email="ahmed@gmail.com", age=25, address){
    return {name: name, email: email, age: age, address:address}
}

let defualtUser = createUser()
console.log(defualtUser)