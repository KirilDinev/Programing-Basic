function depositCalculator(arg1, arg2, arg3) {

    let deposit = Number(arg1);
    let term = Number(arg2);
    let parcent = Number(arg3);

    let interest = deposit * parcent / 100;
    let monthlyInterest = interest / 12;
    let endSum = deposit + (term * monthlyInterest);
    console.log(endSum);
}
depositCalculator("200", "3", "5.7");