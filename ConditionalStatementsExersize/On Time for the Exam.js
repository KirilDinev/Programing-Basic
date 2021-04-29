function onTimeForTheExam(examTimeInHours, examTimeInMinutes, arivalTimeInHours, arivalTimeInMin) {
    let hourExam = Number(examTimeInHours);
    let minExam = Number(examTimeInMinutes);
    let arivalHour = Number(arivalTimeInHours);
    let arivalMin = Number(arivalTimeInMin);
    let arivalmintwo = Number(arivalTimeInMin) + 30;


    let examTime = hourExam + minExam;
    let arivalTime = arivalHour + arivalMin;

    if (arivalTime < examTime) {
        console.log("Late");
    } else if (arivalTime = examTime || arivalTime + arivalmintwo <= examTime) {
        console.log("On time");
    } else if (arivalTime - arivalmintwo > examTime) {
        console.log("Early");
    }

if(hourExam )

}
onTimeForTheExam("15",
"55",
"15",
"40");