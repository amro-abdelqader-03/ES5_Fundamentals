export function calAvg(...grades){
    let sum = 0;
    for(let i = 0; i<grades.length; i++){
        sum += grades[i]
    }
    return sum / grades.length
}

export function maxGrade(...grades){
    let maxGrade = grades[0]
    for(let i = 1; i<grades.length;i++){
        if(grades[i] > maxGrade)
            maxGrade = grades[i]
    }
    return maxGrade
}