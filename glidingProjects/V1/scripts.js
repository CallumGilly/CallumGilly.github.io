import { parse } from '/lib/csvParse.min.js';
let turnPoints = [];
$.get("../TurnPoints.csv", (data, status) => {
    turnPoints = parse(data);
})