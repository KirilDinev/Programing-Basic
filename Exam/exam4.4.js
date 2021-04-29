function fitnes(arreyOfTrenning){
    let index = 0
    let count = Number(arreyOfTrenning[index]);
    index++;
    let countBack = 0;
    let countChest = 0;
    let countLegs = 0;
    let countAbs = 0;
    let countProteinShake = 0;
    let countProteonBar = 0;

    for (let i = 0; i <= count; i++) {
        let sport = arreyOfTrenning[index];
        index++;

        switch (sport) {
            case "Back": countBack++;
                break;
            case "Chest": countChest++;
                break;
            case "Legs": countLegs++;
                break;
            case "Abs": countAbs++;
                break;
            case "Protein shake": countProteinShake++;
                break;
            case "Protein bar": countProteonBar++;
                break;
        }
    }
    console.log(`${countBack} - back`);
    console.log(`${countChest} - chest`);
    console.log(`${countLegs} - legs`);
    console.log(`${countAbs} - abs`);
    console.log(`${countProteinShake} - protein shake`);
    console.log(`${countProteonBar} - protein bar`);
    let treningCount = countBack + countChest + countLegs + countAbs;
    console.log(`${(treningCount / count * 100).toFixed(2)}% - work out`);
    let notTrennningCount = countProteinShake + countProteonBar;
    console.log(`${(notTrennningCount / count * 100).toFixed(2)}% - protein`);
}
fitnes([
    '10',
    'Back',
    'Chest',
    'Legs',
    'Abs',
    'Protein shake',
    'Protein bar',
    'Protein shake',
    'Protein bar',
    'Legs',
    'Abs',
]
);