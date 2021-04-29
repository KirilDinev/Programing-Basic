function worldRecord(swimmingRecord, distanceInMeter, timeInSec ){
    let record = Number(swimmingRecord);
    let distance = Number(distanceInMeter);
    let timeForOneMeter =Number(timeInSec);

    let time = distance * timeForOneMeter;
    let delay = Math.floor(distance / 15) * 12.5;
    let fullTime = time + delay;

    if(record < fullTime){
        console.log(`No, he failed! He was ${(fullTime - record).toFixed(2)} seconds slower.`);
    }else{
        console.log(`Yes, he succeeded! The new world record is ${(fullTime).toFixed(2)} seconds.`);
    }
}
worldRecord("55555.67",
"3017",
"5.03");