let turnPoints = [];
let pointCount = 1;

function turnSet (point) {
    if (point === pointCount) {
        pointCount++;
        $(`#pointRemove${point}`).remove();        
        $("#mainForm").append(`<br id="pointBreak${pointCount}">`)
        $("#mainForm").append(`<label for="point${pointCount}" id="pointLabel${pointCount}">Point ${pointCount - 1}:</label`);
        $("#mainForm").append(`<input list="turnPoints" id="point${pointCount}" name="point${pointCount}">`);
        $("#mainForm").append(`<button id="pointCheck${pointCount}" onClick="turnSet(${pointCount})">✓</button>`);
        $("#mainForm").append(`<button onclick="remove(${pointCount})" id="pointRemove${pointCount}">-</button>`);
    }
}

function remove(point) {
    $(`#pointRemove${point}`).remove();
    $(`#pointLabel${point}`).remove();
    $(`#point${point}`).remove();
    $(`#pointCheck${point}`).remove();
    $(`#pointBreak${point}`).remove();
    pointCount--;
    $("#mainForm").append(`<button onclick="remove(${pointCount})" id="pointRemove${pointCount}">-</button>`);
}

function go() {
    let positions = []
    for (var point = 1; point <= pointCount; point ++) {
        positions[positions.length] = (document.forms["mainForm"][`point${point}`].value.slice(-3));
    }
    console.log(positions);
}
