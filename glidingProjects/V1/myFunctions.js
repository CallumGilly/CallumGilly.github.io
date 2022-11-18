let turnPoints = [];
let pointCount = 1;

function turnSet (point) {
    if (point === pointCount) {
        pointCount++;
        $(`#pointRemove${point}`).remove();        
        $("#mainForm").append(`<div id="pontSelection${pointCount}" class="pointGroup">`);
        $(`#pontSelection${pointCount}`).append(`<label for="point${pointCount}" id="pointLabel${pointCount}">Point ${pointCount - 1}: </label`);
        $(`#pontSelection${pointCount}`).append(`<input list="turnPoints" id="point${pointCount}" name="point${pointCount}">`);
        $(`#pontSelection${pointCount}`).append(`<button id="pointCheck${pointCount}" onClick="turnSet(${pointCount})">✓</button>`);
        $(`#goButton`).remove();
        $("#mainForm").append(`<br id="pointBreak${pointCount}">`)
        $(`#mainForm`).append(`<button onclick="remove(${pointCount})" id="pointRemove${pointCount}" class="removeBtn">Remove Last</button>`);
        $("#mainForm").append(`<button type="submit" onCLick="go()"class="formItem" id="goButton">Go</button>`)
    }
}

function remove(point) {
    $(`#pointRemove${point}`).remove();
    $(`#pointLabel${point}`).remove();
    $(`#point${point}`).remove();
    $(`#pointCheck${point}`).remove();
    $(`#pointBreak${point}`).remove();
    pointCount--;
        $(`#goButton`).remove();
        $(`#pointRemove${pointCount}`).remove();
        $(`#mainForm`).append(`<button onclick="remove(${pointCount})" id="pointRemove${pointCount}" class="removeBtn">Remove Last</button>`);
        $("#mainForm").append(`<button type="submit" onCLick="go()"class="formItem" id="goButton">Go</button>`)
}

function go() {
    let positions = []
    for (var point = 1; point <= pointCount; point ++) {
        positions[positions.length] = (document.forms["mainForm"][`point${point}`].value.slice(-3));
    }
    console.log(positions);
    //Make lat lang array with positions
    let LatLngList = "var latlngs = ["
    positions.forEach(position => {
        let row = 1;
        let rowAsObj = null
        while (row < turnPoints.length && rowAsObj === null) {
            if (turnPoints[row][1] == position) {
                rowAsObj = turnPoints[row];
            } else {
                row++;
            }
        }
        let raw = rowAsObj[5];
        let DMSPropper = raw.split(" ");
        let latLng = [0,0];
        latLng[0] = parseInt(DMSPropper[0]) + parseFloat(DMSPropper[1].substring(0,6)/60);
        if (DMSPropper[1].substring(6,7) == "S") {
            latLng[0] *= -1;
        }
        latLng[1] = parseInt(DMSPropper[2]) + parseFloat(DMSPropper[3].substring(0,6)/60);
        if (DMSPropper[3].substring(6,7) == "W") {
            latLng[1] *= -1;
        }
        LatLngList += "[" + latLng.toString() + "],";        
    });
    LatLngList = LatLngList.slice(0,-1) + "];";
    document.getElementById(`codeOutput`).value = LatLngList;
    document.getElementById(`codeOutput`).value += "var polygon = L.polygon(latlngs, {color: 'red'}).addTo(map);";
    document.getElementById(`codeOutput`).value += "map.fitBounds(polygon.getBounds());";
}

function goMini() {
    let position = document.forms["subForm"][`markerPoint`].value.slice(-3);
    
    //Make lat lang array with positions
    let LatLngList = ""
    let row = 1;
    let rowAsObj = null
    while (row < turnPoints.length && rowAsObj === null) {
        if (turnPoints[row][1] == position) {
            rowAsObj = turnPoints[row];
        } else {
            row++;
        }
    }
    let raw = rowAsObj[5];
    let DMSPropper = raw.split(" ");
    let latLng = [0,0];
    latLng[0] = parseInt(DMSPropper[0]) + parseFloat(DMSPropper[1].substring(0,6)/60);
    if (DMSPropper[1].substring(6,7) == "S") {
        latLng[0] *= -1;
    }
    latLng[1] = parseInt(DMSPropper[2]) + parseFloat(DMSPropper[3].substring(0,6)/60);
    if (DMSPropper[3].substring(6,7) == "W") {
        latLng[1] *= -1;
    }
    LatLngList = "[" + latLng.toString() + "]";
    document.getElementById(`markerCodeOutput`).value = `L.marker(${LatLngList}).addTo(map);`;
}
