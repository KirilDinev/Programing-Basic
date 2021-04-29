function leapYear(firstYear, secondYear){
    let leapYear = Number(firstYear);
    let randomYear = Number(secondYear);

    for(let i = leapYear; i <= randomYear; i+=4){
        console.log(i);
    }
}
leapYear("2020",
"2032");