const students = [
    { id: 1, name: "Ahmad Ali", grade: 85 },
    { id: 2, name: "Omar Hassan", grade: 92 },
    { id: 3, name: "Yousef Khaled", grade: 78 },
    { id: 4, name: "Mohammad Saleh", grade: 88 },
    { id: 5, name: "Ali Mahmoud", grade: 74 },
    { id: 6, name: "Abdullah Samir", grade: 95 },
    { id: 7, name: "Zaid Ahmad", grade: 81 },
    { id: 8, name: "Hamza Nasser", grade: 69 },
    { id: 9, name: "Khaled Ibrahim", grade: 90 },
    { id: 10, name: "Tareq Sami", grade: 76 },
    { id: 11, name: "Lina Ahmad", grade: 89 },
    { id: 12, name: "Sara Ali", grade: 94 },
    { id: 13, name: "Maya Hassan", grade: 83 },
    { id: 14, name: "Noor Khaled", grade: 97 },
    { id: 15, name: "Rana Mohammad", grade: 72 },
    { id: 16, name: "Dana Saleh", grade: 86 },
    { id: 17, name: "Hala Mahmoud", grade: 91 },
    { id: 18, name: "Reem Samir", grade: 79 },
    { id: 19, name: "Aya Nasser", grade: 88 },
    { id: 20, name: "Jana Ibrahim", grade: 75 },
    { id: 21, name: "Yazan Ahmad", grade: 84 },
    { id: 22, name: "Laith Ali", grade: 93 },
    { id: 23, name: "Baraa Hassan", grade: 77 },
    { id: 24, name: "Anas Khaled", grade: 89 },
    { id: 25, name: "Fadi Saleh", grade: 68 },
    { id: 26, name: "Mahmoud Ali", grade: 96 },
    { id: 27, name: "Sami Nasser", grade: 82 },
    { id: 28, name: "Ibrahim Omar", grade: 73 },
    { id: 29, name: "Ayman Khaled", grade: 87 },
    { id: 30, name: "Rami Ahmad", grade: 91 },
    { id: 31, name: "Farah Ali", grade: 95 },
    { id: 32, name: "Leen Hassan", grade: 80 },
    { id: 33, name: "Malak Khaled", grade: 86 },
    { id: 34, name: "Tasneem Saleh", grade: 92 },
    { id: 35, name: "Razan Mahmoud", grade: 78 },
    { id: 36, name: "Dima Samir", grade: 89 },
    { id: 37, name: "Shahd Nasser", grade: 84 },
    { id: 38, name: "Aseel Ibrahim", grade: 98 },
    { id: 39, name: "Jouri Ahmad", grade: 76 },
    { id: 40, name: "Batool Ali", grade: 90 },
    { id: 41, name: "Samer Hassan", grade: 83 },
    { id: 42, name: "Waleed Khaled", grade: 71 },
    { id: 43, name: "Kareem Saleh", grade: 88 },
    { id: 44, name: "Mustafa Mahmoud", grade: 94 },
    { id: 45, name: "Hussein Samir", grade: 79 },
    { id: 46, name: "Firas Nasser", grade: 85 },
    { id: 47, name: "Adnan Ibrahim", grade: 67 },
    { id: 48, name: "Marwan Ahmad", grade: 93 },
    { id: 49, name: "Sultan Ali", grade: 81 },
    { id: 50, name: "Nour Hassan", grade: 87 }
];

// Add

students.splice(51, 0, {id: 50, name:"Amro Abdelqader", grade:99})

// remove

students.splice(49, 1)

// replace

students.splice(1, 1, {id: 2, name:"Ahmed Orabi", grade:80})

students.forEach((student) => {
    console.log(student);
})

console.log("=================================================")

let copy_std = students.slice(0, 5)
copy_std.forEach((student) => {
    console.log(student);
})

console.log("=================================================")

students.sort((a, b) => b.grade - a.grade)
students.forEach((student) => {
    console.log(student);
})