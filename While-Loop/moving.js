function moving(arreyOfMoving) {
    index = 0;
    let width = Number(arreyOfMoving[index]);
    index++;
    let length = Number(arreyOfMoving[index]);
    index++;
    let higth = Number(arreyOfMoving[index]);
    index++;
    let freeSpace = width * length * higth;

    let sumOfSpace = 0;
    command = arreyOfMoving[index];
    index++;
    
    while (command !== "Done") {
        let space = Number(command);
        sumOfSpace += space; 

        if (sumOfSpace > freeSpace) {
            console.log(`No more free space! You need ${sumOfSpace - freeSpace} Cubic meters more.`);
            break;
        }
        command = arreyOfMoving[index];
        index++;
    }
    if(command === "Done"){
    console.log(`${freeSpace - sumOfSpace} Cubic meters left.`);
    }
}
moving(["10",
"1",
"2",
"4",
"6",
"Done"]);