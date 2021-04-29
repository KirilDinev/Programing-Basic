function sequence2KPlus1(arreyOfNum){
    let num = Number(arreyOfNum[0]);
    let counter = 1;
    while(counter <= num){
        console.log(counter);
        counter *= 2;
        counter ++ ;
    }
}
sequence2KPlus1(["3"]);