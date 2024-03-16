const nextB = document.getElementById("nextB");
const prevB = document.getElementById("prevB");

let myImages = document.querySelectorAll(".myImg");
const numOfImg = myImages.length;

myImages.forEach((img) => {
    img.setAttribute("hidden", "hidden");
});

myImages[0].removeAttribute("hidden");
let currentImg = 0;

console.log(nextB);

nextB.onclick = function () {
    myImages[currentImg].setAttribute("hidden", "hidden");

    currentImg = (currentImg + 1) % numOfImg;
    console.log(currentImg);
    myImages[currentImg].removeAttribute("hidden");
};

prevB.onclick = function () {
    myImages[currentImg].setAttribute("hidden", "hidden");

    currentImg = currentImg == 0 ? numOfImg - 1 : currentImg - 1;
    console.log(currentImg);
    myImages[currentImg].removeAttribute("hidden");
};
