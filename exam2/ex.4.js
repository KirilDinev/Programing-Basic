function exam(arreyOfGrades){
let index = 0;
let studentCount = Number(arreyOfGrades[index]);
index++;
let firstGroup = 0;
let secondGroup = 0;
let thurtGroup = 0;
let forthGroup = 0;
let average = 0;

    for(let i = 1; i <= studentCount; i++){
        let grade = Number(arreyOfGrades[index]);
        index++;
        average += grade;
        if(grade >= 2 && grade < 3){
            firstGroup++;
        } else if(grade >= 3 && grade < 4){
            secondGroup++;
        } else if(grade >= 4 && grade < 5){
            thurtGroup++;
        } else {
            forthGroup++;
        }
    }
    console.log(`Top students: ${(forthGroup / studentCount * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${(thurtGroup / studentCount * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${(secondGroup / studentCount * 100).toFixed(2)}%`);
    console.log(`Fail: ${(firstGroup / studentCount * 100).toFixed(2)}%`);
    console.log(`Average: ${(average / studentCount).toFixed(2)}`);
}
exam([
    '10',   '3',    '2.99',
    '5.68', '3.01', '4',
    '4',    '6',    '4.5',
    '2.44', '5',    ''
  ]);