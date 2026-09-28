import { Student } from "./students.js";
import { calAvg,  maxGrade} from "./grades.js";

let student = new Student("Amro", "amro@gmail.com", 1313);
student.getInfo()

console.log(`avg = ${calAvg(12,13,14)}`);
console.log(`max = ${maxGrade(12,13,10)}`);