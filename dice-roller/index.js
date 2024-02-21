const numOfDie = document.getElementById("numOfDie");
const mySubmit = document.getElementById("mySubmit");
const textResult = document.getElementById("textResult");
const imgResult = document.getElementById("imgResult");
const sumP = document.getElementById("sumP");

mySubmit.onclick = function(){
    var values = [];
    var imgs = [];
    var n = numOfDie.value;
    var sum = 0;
    for(var i = 1; i <= n; i++){
        var v = Math.floor(Math.random() * 6) + 1;
        sum += v;
        values.push(v);
        imgs.push(`<img src="./images/d${v}.svg" width="200" height="200">`);
    }
    textResult.innerHTML = values.join(", ");
    imgResult.innerHTML = imgs.join(" ");
    sumP.innerHTML = `sum is <strong>${sum}</strong>`;
}