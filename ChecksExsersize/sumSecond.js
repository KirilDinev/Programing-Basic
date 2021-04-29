function sumSecond(firstPlayer, secoudPlayer, thirdPlayer) {
    let timeFirst = Number(firstPlayer);
    let timeSecond = Number(secoudPlayer);
    let timeThird = Number(thirdPlayer);
    let totalTime = timeFirst + timeSecond + timeThird;
    let min = Math.floor(totalTime / 60);
    let sec = totalTime % 60;

    if (sec > 9) {
        console.log(`${min}:${sec}`);
    } else {
        console.log(`${min}:0${sec}`);
    }

}
sumSecond("35", "45", "44");