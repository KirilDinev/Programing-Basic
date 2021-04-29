function combination(input) {
    let num = Number(input[0]);
    let validCombinationCount = 0;
    for (let i = 0; i <= num; i++) {
        for (let x = 0; x <= num; x++) {
            for (y = 0; y <= num; y++) {
                if (i + x + y === num) {
                    validCombinationCount++
                }
            }
        }
    }
    console.log(validCombinationCount);
}
combination(["25"]);