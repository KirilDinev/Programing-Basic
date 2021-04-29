function salary(arreyOfSalary){
    let index = 0;
    let openTabs = Number(arreyOfSalary[index]);
    index ++;
    let salary = Number(arreyOfSalary[index]);
    index ++;

    let facebook = 150;
    let instagram = 100;
    let reddit = 50;

    for(let i = 0; i <= openTabs; i++){
        let nameTabs = arreyOfSalary[index];
        index++;
        
        if( nameTabs === "Facebook"){
            salary -= facebook;
        }else if(nameTabs === "Instagram"){
            salary -= instagram;
        }else if(nameTabs === "Reddit"){
            salary -= reddit;
        }
    }
    if(salary <= 0){
        console.log("You have lost your salary.");
    }else{
        console.log(salary);
    }
}
salary(["3",
"500",
"Facebook",
"Stackoverflow.com",
"softuni.bg"]);