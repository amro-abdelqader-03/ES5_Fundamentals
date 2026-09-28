students = [
    {
        name: "Amro",
        id: 1,
        grade: 90,
        status: "pass"
    },
    {
        name: "Ahmed",
        id: 2,
        grade: 40,
        status: "fail"
    },
    {
        name: "Ali",
        id: 3,
        grade: 60,
        status: "pass"
    },
    {
        name: "Omer",
        id: 4,
        grade: 80,
        status: "pass"
    },
    {
        name: "fadi",
        id: 1,
        grade: 30,
        status: "faild"
    }
]

for(let i =0; i< students.length; i++){
    console.log(`student ${students[i].name} with grade ${students[i].grade} is ${students[i].status}`);
}

console.log("=========================================================================");
for(let i =0; i< students.length; i++){
    console.log(`student ${students[i].name} with grade ${students[i].grade} 
        is ${students[i].status}`);
}
