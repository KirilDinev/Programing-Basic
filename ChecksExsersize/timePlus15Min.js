function timePlus15Min( timeHours, timeMinutes ){
let hours = Number(timeHours);
let minutes = Number(timeMinutes) + 15

if( minutes >= 60){
    hours = hours + 1;
    minutes = minutes - 60;
}
if(hours >= 24){
    hours = hours - 24 
}
if(minutes < 9){
console.log(`${hours}:0${minutes}`);
} else {
    console.log(`${hours}:${minutes}`)
}

}
timePlus15Min("1", "46");