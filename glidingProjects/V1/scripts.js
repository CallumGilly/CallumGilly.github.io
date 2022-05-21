import { parse } from '/lib/csvParse.min.js';
$.get("../TurnPoints.csv", (data, status) => {
    turnPoints = parse(data);
    for (let index = 1; index < turnPoints.length;index++) {
        $("#point1").append($('<option>', {
            value: turnPoints[index][1],
            text: turnPoints[index][0] + " " + turnPoints[index][1]
        }));
    }
    $("#point1").selectize({
        sortField: 'text'
    });
});

