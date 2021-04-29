function traveling(arrayOfTraveling) {
    let index = 0
    let isGoing = arrayOfTraveling[index];
    index++;
    let sumOfBudget = 0
    while (isGoing !== "End") {
        let needSumForTravel = Number(arrayOfTraveling[index]);
        index++;
        budget = Number(arrayOfTraveling[index]);
        index++;
        while (needSumForTravel > sumOfBudget) {
            sumOfBudget += budget;
            if(sumOfBudget >= needSumForTravel){
                sumOfBudget = 0;
                console.log(`Going to ${isGoing}!`);
                break;
            }
            budget = Number(arrayOfTraveling[index]);
            index++;
        }
        isGoing = arrayOfTraveling[index];
        index++;
    }
}
traveling((["Greece",
    "1000",
    "200",
    "200",
    "300",
    "100",
    "150",
    "240",
    "Spain",
    "1200",
    "300",
    "500",
    "193",
    "423",
    "End"]));

traveling(["France",
    "2000",
    "300",
    "300",
    "200",
    "400",
    "190",
    "258",
    "360",
    "Portugal",
    "1450",
    "400",
    "400",
    "200",
    "300",
    "300",
    "Egypt",
    "1900",
    "1000",
    "280",
    "300",
    "500",
    "End"]);
    
