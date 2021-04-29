function christmasGifts(arreayOfYear){
    index = 1;
    let people = Number(arreayOfYear[0]);
    let NumberOfadult = 0;
    let NumOfChildren = 0
    let moneyForToys = 0;
    let moneyForSweaters = 0;
    let toy = 5;
    let sweaters = 15;

    while(people !== "Christmas"){
        
        if(people > 16){
            
            console.log(`Number of adults: ${NumberOfadult}`);
        }else if (people <= 16){
            console.log(`Number of kids: ${NumOfChildren}`);
        }
        NumberOfadult++
        NumOfChildren++
        people = Number(arreayOfYear[index])
        index++
    }
    
   
    console.log(`Money for toys: ${moneyForToys}`);
    console.log(`Money for sweaters: ${moneyForSweaters}`);

}
christmasGifts(["16", "20", "46", "12", "8", "20", "49",
"Christmas"])