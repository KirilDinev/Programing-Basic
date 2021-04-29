function building(arreyOfFloors) {
    let roll = Number(arreyOfFloors[0]);
    let coll = Number(arreyOfFloors[1]);
   
    for (let x = roll; x > 0; x--) {
        let result = " ";
        for (let y = 0; y < coll; y++) {
            if(x === roll){
                result += `L${x}${y} `
            }else if (x % 2 === 0) {
                result += `O${x}${y} `
            } else{
                result += `А${x}${y} `
            }
        }
        console.log(result);
    }
}
building(["6", "4"]);
