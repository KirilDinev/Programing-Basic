function fishTank(lengthInCm, widthInCm, higthInCm, parcent){

    let length = Number(lengthInCm);
    let width = Number(widthInCm);
    let higth = Number(higthInCm);
    let volume = length * width * higth;
    let totalWather = volume * 0.001;
    let tankParcent = parcent * 0.01;
    let needWather = totalWather * (1 - tankParcent);
    console.log(needWather);

}
fishTank("85", "75", "47", "17")