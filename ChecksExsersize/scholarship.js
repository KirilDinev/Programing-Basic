function scholarship(incomeInLeva, averageSuccess, workSalary) {
    let income = Number(incomeInLeva);
    let average = Number(averageSuccess);
    let minimalSalary = Number(workSalary);

    let socialScholarship = Math.floor(minimalSalary * 0.35);
    let excellentScholarship = Math.floor(average * 25);

    if (income > minimalSalary || average <= 4.50) {
        console.log("You cannot get a scholarship!");

    } else if (income <= minimalSalary && average > 4.50) {
        console.log(`You get a Social scholarship ${socialScholarship} BGN`);

    } else if (average >= 5.50) {
        
        console.log(`You get a scholarship for excellent results ${excellentScholarship} BGN`);

    } else { 
        console.log(`You get a Social scholarship ${socialScholarship} BGN`);
    }


}
scholarship("500", "5.49", "600");