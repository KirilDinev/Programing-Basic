function weeckendOrWorkingDay(day) {

    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday": console.log("Working day"); break;
        case "Satuday":
        case "Sunday": console.log("Weekend"); break;
        default: console.log("Error"); break;
    }

}
weeckendOrWorkingDay("kiki");