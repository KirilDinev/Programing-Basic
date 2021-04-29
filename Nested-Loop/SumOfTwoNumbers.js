function sumOfTwoNum(arreyofNum) {
    let stratNum = Number(arreyofNum[0]);
    let endNum = Number(arreyofNum[1]);
    let magicNum = Number(arreyofNum[2]);
    let combination = 0;
    let itsTrue = false;

    for (let x = stratNum; x <= endNum; x++) {
        for (let y = stratNum; y <= endNum; y++) { 
            combination++
            if(x + y=== magicNum){
                console.log(`Combination N:${combination} (${x} + ${y} = ${magicNum})`);
                itsTrue = true;
                break;
            }
        }
        if(itsTrue){
           break;
            }
    } 
    if(!itsTrue){
        console.log(`${combination} combinations - neither equals ${magicNum}`);
    }
}
sumOfTwoNum(["88", 
"888", 
"2000"]);