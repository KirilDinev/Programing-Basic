function spaceShip(weghtShip, lengthShip, heightShip, astronaftHeight) {
    let weight = Number(weghtShip);
    let length = Number(lengthShip);
    let height = Number(heightShip);
    let averageHeight = Number(astronaftHeight);
    let volumeShip = weight * length * height;
    let volumeRoom = (averageHeight + 0.40) * 2 * 2;
    let astroNumber = volumeShip / volumeRoom;

    if(astroNumber >= 3 && astroNumber <= 10){
        console.log(`The spacecraft holds ${Math.floor(astroNumber)} astronauts.`);
    }else if (astroNumber < 3){
        console.log("The spacecraft is too small.");
    }else if(astroNumber > 10){
        console.log("The spacecraft is too big.");
    }
}
spaceShip("4.5", "4.8", "5", "1.75");