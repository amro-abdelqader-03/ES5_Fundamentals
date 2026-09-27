const arr1 = ["Ahmad", "Omar", "Yousef", "Khaled", "Mohammad", "Abdullah", "Ali", "Hassan", "Hussein",
    "Ibrahim", "Mahmoud", "Tariq", "Zaid", "Hamza", "Anas", "Laith", "Samer", "Fadi", "Rami",
    "Ammar", "Bilal", "Muath", "Iyad", "Waleed", "Nasser", "Yazan", "Sultan", "Karim", "Malek"]

const arr2 = ["Adnan", "Lina", "Sara", "Maya", "Layan", "Leen", "Dana", "Rana", "Hala", "Nour",
    "Aya", "Dina", "Reem", "Jana", "Farah", "Rania", "Mariam", "Salma", "Yasmin", "Dalia", "Sahar"]
    
const arr3 = arr1.concat(arr2)
console.log(arr3)
console.log("============================================================")
arr3.sort()

console.log(arr3)
console.log("============================================================")
arr3.reverse()

console.log(arr3)

console.log(`dose amro on array ? ${arr3.includes('amro')}`)
console.log("============================================================")
arr3.forEach((name, index) => {
    console.log(`${name} ${index}`)
});