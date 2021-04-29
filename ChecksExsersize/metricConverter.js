function metricConverter(count, cm, mm) {
    let num = Number(count)
    let textOne = cm;
    let textTwo = mm;

    if (textOne === "mm" && textTwo === "cm") {
        console.log((num * 10).toFixed(3));
    }

    if (textOne === "cm" && textTwo === "m") {
        console.log((num * 100).toFixed(3));
    }

    if (textOne === "mm" && textTwo === "m") {
        console.log((num / 1000).toFixed(3));
    }

    if (textOne === "cm" && textTwo === "mm") {
        console.log((num * 10).toFixed(3));
    }

    if (textOne === "m" && textTwo === "cm") {
        console.log((num * 100).toFixed(3));
    }

    if (textOne === "m" && textTwo === "mm") {
        console.log((num / 1000).toFixed(3));
    }
}
    metricConverter("12", "mm", "m");
