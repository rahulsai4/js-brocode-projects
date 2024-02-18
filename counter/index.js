let count = 0;
elem = document.getElementById('myPara');

elem.textContent = 0;

document.getElementById("icount").onclick = function(){
    elem.textContent = ++count;
}

document.getElementById("dcount").onclick = function(){
    elem.textContent = --count;
}

document.getElementById("ccount").onclick = function(){
    elem.textContent = (count=0);
}