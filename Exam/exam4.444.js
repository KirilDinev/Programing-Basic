function trekkingMania(arreyOfPeople) {
    let index = 0;
    let group = Number(arreyOfPeople[index]);
    index++;
    let allPeople = 0;
    let musalaCount = 0;
    let mohnBlancCount = 0;
    let kilimanjaroCount = 0;
    let k2Count = 0;
    let everestCount = 0;

    for (let i = 0; i < group; i++) {
        let peoples = Number(arreyOfPeople[index]);
        index++;
        allPeople += peoples;

        if (peoples <= 5) {
            musalaCount += peoples;
        } else if (peoples >= 6 && peoples <= 12) {
            mohnBlancCount += peoples;
        } else if (peoples >= 13 && peoples <= 25) {
            kilimanjaroCount += peoples;
        } else if (peoples >= 26 && peoples <= 40) {
            k2Count += peoples;
        } else {
            everestCount += peoples;
        }

    }
    console.log(`${(musalaCount / allPeople * 100).toFixed(2)}%`);
    console.log(`${(mohnBlancCount / allPeople * 100).toFixed(2)}%`);
    console.log(`${(kilimanjaroCount / allPeople * 100).toFixed(2)}%`);
    console.log(`${(k2Count / allPeople * 100).toFixed(2)}%`);
    console.log(`${(everestCount / allPeople * 100).toFixed(2)}%`);
}
trekkingMania([
    '10', '10', '5',
    '1', '100', '12',
    '26', '17', '37',
    '40', '78'
]
);
