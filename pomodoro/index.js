let start = document.getElementById("start");
let timer = document.getElementById("timer");
let music = document.getElementById("music");
let input = document.getElementById("input");
let done = document.getElementById("done");

let min;
let sec = 0;
let clear;
let clearMusic;

start.onclick = function () {
    clearInterval(clear);
    done.textContent = "";

    music.play();
    clearMusic = setInterval(music.play, 180000);
    min = input.value;
    sec = 0;
    updateTimer();
    clear = setInterval(updateTimer, 1000);
};

function updateTimer() {
    if (min <= 0 && sec == 0) {
        clearInterval(clear);
        finished();
        return;
    }
    if (sec == 0) {
        sec = 60;
        min--;
    }
    sec--;

    min = min.toString().padStart(2, 0);
    sec = sec.toString().padStart(2, 0);
    let str = `${min}: ${sec}`;
    timer.textContent = str;
}

function finished() {
    music.pause();
    clearInterval(clearMusic);
    done.textContent = "👍";
}
