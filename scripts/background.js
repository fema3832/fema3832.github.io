var canvas = document.getElementById("background");
context = canvas.getContext("2d");

if (window.innerWidth < 1000) {
    stars = 400;
} else {
    stars = 1000;
}

for (var i = 0; i < stars; i++) {
    var x = Math.random() * 2000;
    var y = Math.random() * 1500;
    radius = Math.random() * 1.2;
    context.beginPath();
    context.arc(x, y, radius, 0, 360);
    context.fillStyle = "rgba(255, 255, 255, 0.8)";
    context.fill();
}