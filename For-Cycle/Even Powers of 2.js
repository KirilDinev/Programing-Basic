function evenPowersOfTwo(count){
    let num = Number(count);
    let n = 1
    for(let i = 0; i <= num; i+=2){
        console.log(n);
        n = n * 2 * 2;
    }
}
evenPowersOfTwo("4");