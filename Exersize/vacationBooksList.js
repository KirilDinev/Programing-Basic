function vacationBooksList(page, time, days){

    let pageCount = Number(page);
    let pageForHour = Number(time);
    let daysCount = Number(days);
    let totalTime = pageCount / pageForHour;
    let needTime = totalTime / daysCount;
    console.log(needTime);



}
vacationBooksList("432", "15", "4")