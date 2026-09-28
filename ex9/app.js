let students1 = [
    {
        name:"Amro",
        id:1213,
        grade:90
    },
    {
        name:"Ahmed",
        id:1223,
        grade:95
    }
]

let students2 = [
    {
        name:"Ali",
        id:1233,
        grade:80
    },
    {
        name:"Abd",
        id:1243,
        grade:85
    }
]

let students3 = [...students1, ...students2]
console.log(students3)

console.log("=============================================");

function calAvg(...grades){
    let sum = 0;
    for(let i = 0; i< grades.length; i++){
        sum += grades[i]
    }
    return sum / grades.length;
}

console.log(calAvg(13,14,15));

console.log("=============================================");

let std_ids = [1, 1, 3, 4, 5, 4]
let clean_std_ids = [...new Set(std_ids)]
console.log(clean_std_ids)

console.log("=============================================");

let stds = students1.map(student => `${student.name} ${student.grade}`)
console.log(stds);