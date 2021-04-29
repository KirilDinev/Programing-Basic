function examPreparation(arreyOfTasks) {
    let index = 0;
    let countNegativeGrades = Number(arreyOfTasks[index]);
    index++;
    let command = arreyOfTasks[index];
    index++;
    let taskCounter = 0;
    let sumOfGrade = 0;
    let negativeTaskCaounter = 0;
    let taskName = " "

    while (command !== "Enough") {
        taskName = command;
        let grade = Number(arreyOfTasks[index]);
        index++;
        if (grade <= 4) {
            negativeTaskCaounter++;
        }
        if (countNegativeGrades === negativeTaskCaounter) {
            console.log(`You need a break, ${negativeTaskCaounter} poor grades.`);
            break;
        }

        sumOfGrade += grade;
        taskCounter++;
        command = arreyOfTasks[index];
        index++;
    }
    if (command === "Enough") {
        console.log(`Average score: ${(sumOfGrade / taskCounter).toFixed(2)}`);
        console.log(`Number of problems: ${taskCounter}`);
        console.log(`Last problem: ${taskName}`);
    }
}
examPreparation(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"])
    ;