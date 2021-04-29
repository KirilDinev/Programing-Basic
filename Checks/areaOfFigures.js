function areaOfFigures(figureType, figureLenght, figureHeight) {
    let type = figureType;

    if(type === "square"){
        let sideA = figureLenght;
        let area = sideA * sideA;
        console.log(area.toFixed(3))
    }else if(type === "rectangle"){
        let sideA = figureLenght;
        let sideB = figureHeight;
        let area = sideA * sideB;
        console.log(area.toFixed(3));
    }else if(type === "circle"){
        let r = figureLenght;
        let area = Math.PI * r * r;
        console.log(area.toFixed(3));
    }else if(type === "triangle"){
        let sideA = figureLenght;
        let sideB = figureHeight;
        let area = sideA * sideB / 2;
        console.log(area.toFixed(3));
    }
}
areaOfFigures("triangle",
"4.5",
"20");