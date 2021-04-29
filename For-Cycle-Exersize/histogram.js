function histogram(areryOfNumbers) {
    let index = 0;
    let n = areryOfNumbers[index];
    index++;

    p1 = 0;
    p2 = 0;
    p3 = 0;
    p4 = 0;
    p5 = 0;

    for (let i = 0; i <= n; i++) {
        let n = Number(areryOfNumbers[index]);
        index++;
        if (n < 200) {
            p1++;
        } else if (n >= 200 && n < 400) {
            p2++;
        } else if (n >= 400 && n < 600) {
            p3++;
        } else if (n >= 600 && n < 800) {
            p4++;
        } else if (n >= 800) {
            p5++;
        }
    }
    console.log(`${(p1 / n * 100).toFixed(2)}%`);
    console.log(`${(p2 / n * 100).toFixed(2)}%`);
    console.log(`${(p3 / n * 100).toFixed(2)}%`);
    console.log(`${(p4 / n * 100).toFixed(2)}%`);
    console.log(`${(p5 / n * 100).toFixed(2)}%`);
}
histogram(["9",
"367", 
"99", 
"200", 
"799",
"999",
"333",
"555",
"111",
"9"]);