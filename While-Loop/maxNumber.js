function maxNumber(arreyOfNumbers){
    let index = 0;

    while(arreyOfNumbers[index] !== "Stop"){
        let firstnum = Number(arreyOfNumbers[index]);
        console.log(firstnum);
        index++;
    }

}
maxNumber(["100",
"99",
"80",
"70",
"Stop"]);