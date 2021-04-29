function yardGreening (yards){

    let sum = yards * 7.61;
    let discount = sum * 0.18;
    let totalSum = sum - discount
    console.log(`The final price is: ${totalSum} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}
yardGreening("150");