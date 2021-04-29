function minNumber(arreyOfMinNumbers){
let index = 0;
let date = arreyOfMinNumbers[index];
index++;
let minNum = Number(arreyOfMinNumbers[index]);
index++;

while(date !== "Stop"){
    let min = Number(date);
    if(min < minNum){
        minNum = min;
    }
    date = arreyOfMinNumbers[index];
    index++
}
console.log(minNum)
}
minNumber(["100",
"99",
"80",
"70",
"Stop"]);