
const PI = 3.14159;
let radius;
let area;

document.getElementById("butt").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    area = Math.round(radius * PI * radius);
    document.getElementById("ans").textContent = area + "cm";
}

