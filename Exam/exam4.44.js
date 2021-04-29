function petsFood(arreyOfFood){
    let index = 0;
    let dayNumber = Number(arreyOfFood[index]);
    index++;
    let amauntFood = Number(arreyOfFood[index]);
        index++;
        let biscuits = 0;
    let foodDog = 0;
    let foodCat = 0;
    

    for(let i = 1; i <= dayNumber; i++){
        if(i % 3 === 0){
           biscuits = foodPerDay * 0.10
        } 
        foodDogOne += Number(arreyOfFood[index]);
        index++;
        foodCatoOne += Number(arreyOfFood[index]);
        index++;
        
    }
    let foodForPets = foodDog + foodCat;
    console.log(`Total eaten biscuits: ${biscuits}gr.`);
    let foodForPetsPrarcent = foodForPets / amauntFood * 100;
    console.log(`${foodForPetsPrarcent.toFixed(2)}% of the food has been eaten.`);
    let dogParcent = foodDog / foodForPets * 100;
    console.log(`${dogParcent.toFixed(2)}% eaten from the dog.`);
    let catParcent = foodCat / foodForPets * 100;
    console.log(`${catParcent.toFixed(2)}% eaten from the cat.`);
}
petsFood([
    "3",
    "1000",
    "300",
    "20",
    "100",
    "30",
    "110",
    "40"
]);