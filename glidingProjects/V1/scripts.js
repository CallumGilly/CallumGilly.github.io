import { parse } from '/lib/csvParse.min.js';
$.get("../TurnPoints.csv", (data, status) => {
    turnPoints = parse(data);
    for (let index = 1; index < turnPoints.length;index++) {
        $("#turnPoints").append($('<option>', {
            value: turnPoints[index][0] + " " + turnPoints[index][1]
        }));
    }
});

