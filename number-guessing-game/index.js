let myGame = document.getElementById("myGame");
let myOutput = document.getElementById("myOutput");
let myStartB = document.getElementById("myStartB");
let myCheckB = document.getElementById("myCheckB");
let myInput = document.getElementById("myInput");
let myEndB = document.getElementById("myEndB");

myStartB.onclick = function(){
    myGame.style.visibility = "visible";
    myStartB.style.visibility = "hidden";
    myEndB.style.visibility = "visible";
}

let randomNum = Math.floor(Math.random() * 101);
let num = -1;
count = 0;

myCheckB.onclick = function(){
    num = Number(myInput.value);
    count++;

    if(num > randomNum){
        myOutput.innerHTML = "lower";
    }
    else if(num < randomNum){
        myOutput.innerHTML = "higher";
    }
    else{
        myOutput.innerHTML = "correct!!! you took " + count + " attempts";
    }
}

myEndB.onclick = function(){
    myGame.style.visibility = "hidden";
    myStartB.style.visibility = "visible";
    myEndB.style.visibility = "hidden";
}