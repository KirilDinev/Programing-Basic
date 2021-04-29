function  careOfPuppy(arreyOfFood){
    let index = 0;
    let foodForPuppyInKg = Number(arreyOfFood[index]);
    index++
    let foodForPuppyInGr = foodForPuppyInKg * 1000;
    let command = arreyOfFood[index];
    index++;

    while(command !== "Adopted"){
        let food = Number(command);
        foodForPuppyInGr -= food;

         command = arreyOfFood[index];
        index++;
    }
    if(foodForPuppyInGr >= 0){
        console.log(`Food is enough! Leftovers: ${foodForPuppyInGr} grams.`);
    } else {
        console.log(`Food is not enough. You need ${Math.abs(foodForPuppyInGr)} grams more.`)
    }
}
careOfPuppy([
    '2',   '999',
    '456', '999',
    '999', '123',
    '456', 'Adopted'
  ]
  );