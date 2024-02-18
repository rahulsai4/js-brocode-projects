randomNum = Math.random();

b = document.getElementById("myButton")
r = document.getElementById("roll");
b.onclick = function(){
    dieNum = (Math.floor(Math.random() * 6)) + 1;
    console.log(dieNum);
    r.textContent = dieNum;
}