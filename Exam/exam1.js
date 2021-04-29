function moon(speed, benzin){
    let averageSpeed = Number(speed);
    let benzinForHundretKM = Number(benzin);
    let totalDistace = 384400 * 2;
    let timeToTheMoonAndBack = Math.ceil(totalDistace / averageSpeed) + 3;
    let fuel = (totalDistace * benzinForHundretKM) / 100;
    console.log(timeToTheMoonAndBack);
    console.log(fuel); 
}
moon("10000","5");
