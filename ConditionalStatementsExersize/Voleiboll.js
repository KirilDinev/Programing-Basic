function voleiboll(year, holliday, travelWeekend) {
    let p = Number(holliday);
    let h = Number(travelWeekend);

    let weekandInOneYear = 48
    let playWeekand = weekandInOneYear - h;

    playWeekand = (3.0 / 4) * playWeekand;


    playWeekandInSunday = h

    hollidays = (2.0 / 3) * p

    let totalVoleibollPlay = playWeekand + playWeekandInSunday + hollidays;

    if (year === "leap") {
        totalVoleibollPlayInLeap = totalVoleibollPlay * 0.15
        console.log(Math.floor(totalVoleibollPlayInLeap + totalVoleibollPlay));
    } else if (year === "normal") {
        console.log(Math.floor(totalVoleibollPlay));
    }

}
voleiboll("leap",
"2",
"3");