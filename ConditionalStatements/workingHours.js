function workingHours(hour, day) {
    let time = Number(hour);

    switch (day) {
        case "Monday":
            if (time >= 10 && time < 18) {
                console.log("open");
            } else {
                console.log("closed");
            }
            break;
        case "Tuesday":
            if (time >= 10 && time < 18) {
                console.log("open");
            } else {
                console.log("closed");
            }
            break;
        case "Wednesday":
            if (time >= 10 && time < 18) {
                console.log("open");
            } else {
                console.log("closed");
            }
            break;
        case "Thursday":
            if (time >= 10 && time < 18) {
                console.log("open");
            } else {
                console.log("closed");
            }
            break;
        case "Friday":
            if (time >= 10 && time < 18) {
                console.log("open");
            } else {
                console.log("closed");
            }
            break;
        case "Satuday":
            if (time >= 10 && time < 18) {
                console.log("open");
            } else {
                console.log("closed");
            }
            break;
        case "Sunday": console.log("closed"); break;
        default: console.log("closed"); break;
    }
}
workingHours("19",
    "Friday");