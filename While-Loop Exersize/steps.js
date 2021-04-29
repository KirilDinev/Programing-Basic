function steps(arreyOfSteps){
    let goal= 10000;
    let index = 0;
    let command = arreyOfSteps[index];
    index++;
    let sumOfSteps = 0

    while(goal >= 0){
        let steps = Number(command);
        sumOfSteps += steps;
        if(sumOfSteps >= goal){
            console.log("Goal reached! Good job!");
            console.log(`${sumOfSteps - goal} steps over the goal!`);
            break;
        }
        if(command === "Going home"){
            
            console.log("Goal reached! Good job!");
            console.log(`${sumOfSteps - goal} steps over the goal!`);
        }
        command = arreyOfSteps[index];
        index++;
    }
}
steps(["1500",
"3000",
"250",
"1548",
"2000",
"Going home",
"2000"]);