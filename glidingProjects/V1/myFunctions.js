let turnPoints = [];
let pointCount = 1;

function turnSet (point) {
    if (point === pointCount) {
        pointCount++;
        $("#mainForm").append(`<div id"pontSelection${pointCount}">`)
        $("#mainForm").append(`<label for="point${pointCount}" id="pointLabel${pointCount}">Point ${pointCount - 1}:</label`);
        // $("#mainForm").append(`<button onclick="remove(${pointCount})" id="pointButton${pointCount}">-</button>`);
        $("#mainForm").append(`
            <select id="point${pointCount}" name="point${pointCount}" onchange="turnSet(${pointCount})">
                <option value="null" selected>Please Select a turnpoint</option>
            </select>
        `);
        $("#mainForm").append(`</div>`)
        for (let index = 1; index < turnPoints.length;index++) {
            $(`#point${pointCount}`).append($('<option>', {
                value: turnPoints[index][1],
                text: turnPoints[index][0] + " " + turnPoints[index][1]
            }));
        }
        $(`#point${pointCount}`).selectize({
            sortField: 'text'
        });
    }
}

function go() {
    console.log($("point1").value);
    
}
