function catFood(input){
    let index = 0;
    let catCount = Number(input[index]);
        index++;
    let oneKgFood = 12.45
    let sum = 0;
    let firstGroup = 0;
    let secondGroup = 0;
    let thurdGroup = 0;

    for(let i = 0; i <= catCount; i++){
        let eatingFood = Number(input.shift())
        sum += eatingFood / 1000 
        if(eatingFood >= 100){
            if(eatingFood >= 100 && eatingFood < 200){
                firstGroup++;
            } else if ( eatingFood < 300){
                secondGroup++
            } else if (eatingFood < 400){
                thurdGroup++;
            }
        }
       
    }
        console.log(`Group 1: ${firstGroup} cats.`);
        console.log(`Group 2: ${secondGroup} cats.`);
        console.log(`Group 3: ${thurdGroup} cats.`);
        console.log(`Price for food per day: ${(sum * oneKgFood).toFixed(2)} lv.`)
}
catFood(["6", "102", "236", "123", "399", "342", "222"]);