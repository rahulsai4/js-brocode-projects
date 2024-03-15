let start = document.getElementById("start");
let reset = document.getElementById("reset");
let rockB = document.getElementById("rockB");
let paperB = document.getElementById("paperB");
let scissorB = document.getElementById("ScissorB");
let playerPlayed = document.getElementById("player-played");
let computerPlayed = document.getElementById("computer-played");
let playerScore = document.getElementById("player-score");
let computerScore = document.getElementById("computer-score");
let buttons = document.querySelectorAll(".buttons");
let displayResult = document.getElementById("displayResult");

reset.style.display = "none";

start.onclick = startGame;

function startGame() {
    console.log("game started");
    reset.style.display = "block";
    pScore = 0;
    cScore = 0;
    pChoice = "";
    clear();

    rockB.onclick = function () {
        pChoice = "🪨";
        pVc();
    };
    paperB.onclick = function () {
        pChoice = "📜";
        pVc();
    };
    scissorB.onclick = function () {
        pChoice = "✂";
        pVc();
    };

    function pVc() {
        console.log(pChoice);
        choicesArray = ["🪨", "📜", "✂"];
        pChoiceIndex = choicesArray.indexOf(pChoice);
        cChoiceIndex = Math.floor(Math.random() * 3);
        displayResult.classList.remove("greenText", "redText");

        if (cChoiceIndex == (pChoiceIndex + 1) % 3) {
            displayResult.textContent = "YOU LOSE !!!";
            displayResult.classList.add("redText");
            cScore++;
        } else if (cChoiceIndex == pChoiceIndex) {
            displayResult.textContent = "DRAW !!!";
            pScore += 0.5;
            cScore += 0.5;
        } else {
            displayResult.textContent = "YOU WIN !!!";
            displayResult.classList.add("greenText");
            pScore++;
        }
        playerPlayed.textContent = `Player: ${pChoice}`;
        computerPlayed.textContent = `Computer: ${choicesArray[cChoiceIndex]}`;

        playerScore.textContent = `Player Score: ${pScore}`;
        computerScore.textContent = `Computer Score: ${cScore}`;
    }

    reset.onclick = clear;
    function clear() {
        playerPlayed.textContent = `Player: `;
        computerPlayed.textContent = `Computer: `;

        displayResult.textContent = "";

        playerScore.textContent = `Player Score: `;
        computerScore.textContent = `Computer Score: `;
        pScore = 0;
        cScore = 0;
    }
}
