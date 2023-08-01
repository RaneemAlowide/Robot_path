var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var path = JSON.parse(localStorage.getItem('path'));

if (path) {
  ctx.strokeStyle = '#49A592';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(path[0][0], path[0][1]);

  for (var i = 1; i < path.length; i++) {
    var x = path[i][0];
    var y = path[i][1];
    ctx.lineTo(x, y);
  }

  ctx.stroke();
}