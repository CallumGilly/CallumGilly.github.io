//Import Turn Points
let turnPoints = [];
let getTextFile = new XMLHttpRequest;
getTextFile.open("GET", "./TurnPoints.csv", true);
getTextFile.onreadystatechange = () => {
    let CSV = getTextFile.responseText;
    turnPoints = CSV.split(/\r\n|\n/);
    console.log(turnPoints)
};

