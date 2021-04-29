function graduationTwo(arreyOfGrades){
    index = 0;
    let name = arreyOfGrades[index];
    index++;
    let klas = 0;
    let sumOfgrade = 0;
    while(klas <= 11){
        let grade = Number(arreyOfGrades[index]);
        index++;
        klas++;
        sumOfgrade += grade;
        if(grade < 3){
            console.log(`${name} has been excluded at ${klas} grade`);
            break;
        }else if(grade < 4){
            console.log(`${name} has been excluded at ${klas} grade`);
            break;
        }else{
            continue;
        }
    }
    if(klas > 11){
        console.log(`${name} graduated. Average grade: ${(sumOfgrade / 12).toFixed(2)}`);
    }
}
graduationTwo(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"]);