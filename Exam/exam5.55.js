function suitcasesLoad(arreyOfSpace){
    let index = 0;
    let capacity = Number(arreyOfSpace[index]);
    index++;
    let command = (arreyOfSpace[index]);
    index++;
    let counter = 0;
    let isFreeSpace = true;

    while(command !== "End"){
        let suitcase = Number(command);

        if(suitcase % 3 === 0 && counter !== 0){
            suitcase *= 1.10;
        }
        capacity -= suitcase

        if(capacity < 0){
            
            console.log("No more space!");
            isFreeSpace = false;
            break;
        }
        counter++
        command = arreyOfSpace[index];
        index++;
    }
    if(isFreeSpace){
        console.log("Congratulations! All suitcases are loaded!");
    }
console.log(`Statistic: ${counter} suitcases loaded.`)
}
suitcasesLoad([ '550', 'End' ]);