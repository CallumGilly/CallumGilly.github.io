
//Make the empty car park
var carPark = [];
for (var i = 0; i < 10; i++) {
  var temp = [];
    for (var a = 0; a < 6; a++) {
      temp.push(null);
    }
  carPark.push(temp)
}

function buttonPressed() {
  var x = document.getElementById('x').value;
  var y = document.getElementById('y').value;
  var reg = document.getElementById('reg').value;
  x = x - 1;
  y = y - 1;
  if (x < 0 || x > 5 || y < 0 || y > 9 || reg == '') {
    window.alert('Please enter a valid response');
  } else {
    if (carPark[y][x] != null) {
      window.alert('Space taken');
    }else {
      carPark[y][x] = reg;
    }
  }
  for (var i = 0; i < carPark.length; i++) {
    document.getElementById(i+1).innerHTML = JSON.stringify(carPark[i], null, 6);
  }
}
