//declaration
const options = ["rock", "paper", "scizzors"];
let round = 0;
let humanScore = 0;
let computerScore = 0;
// create a container for the n buttons
const modal = document.createElement("div");
document.body.appendChild(modal);
modal.setAttribute("class", "modal");

const container = document.createElement("div");
modal.appendChild(container);
const header = document.createElement("div");
container.appendChild(header);
header.getAttribute("class", "header");
header.textContent = "Rock, Paper, Scizzors";
const text = document.createElement("div");
container.appendChild(text);
text.getAttribute("class", "text");
text.textContent = "Lets play!"
const score = document.createElement("div");
container.appendChild(score);
score.getAttribute("class", "score");

const box = document.createElement("div");
modal.appendChild(box);
// create n buttons, each with a class and a text equal to the current position of the oprions array
let docFrag = document.createDocumentFragment();
for (const option of options) {
    let elem = document.createElement("button");
    elem.setAttribute("class", option);
    elem.textContent = option;
    docFrag.appendChild(elem);
}
box.appendChild(docFrag);
// choose a number between 0 and 2
function getComputerChoice() {
    return Math.floor(Math.random() * options.length);
}

// better modulo fuction that works with negative numbers
function mod(n, m) {
    return ((n % m) + m) % m;
}

const nodeList = document.querySelectorAll("button");

// play one round of the game
function playRound(humanChoice)
{
    /* This part is a bit tricky
    Let's consider the game rock paper scizzors as a permutation of elements of Z3
    So rock = 0, paper = 1, scizzors = 2,
    each round consist in the human choosing one of this 3 number and compare with the computer choice
    if the human choose 1 is easy, he wins vs 0 and loose vs 2 so we can build an easy function as follow
    lets consider c = computerChoice and h = humanChoice
    c = h - 1 => human wins, if c = h + 1 => computer wins.
    But we are in Z3 and it makes no sense to think of 0 - 1, human choose rock, or 2 + 1, human choose scizzors
    but if we rewrite the equations as follow it makes a lot of sense
    c = h - 1 (mod 3), c = h + 1 (mod 3)
    lets use rock, 0, as an example:
    h = 0 => 0 - 1 (mod 3) = 2 = c = scizzors => human wins! */
    if (humanScore < 5 && computerScore < 5) {
        const computerChoice = getComputerChoice();
        if(computerChoice === mod(options.indexOf(humanChoice) + 1, options.length)) {
            computerScore++;
            text.textContent = `round: ${round} Computer win the round!`;
        }
            
        else if(computerChoice === mod(options.indexOf(humanChoice) - 1, options.length)) {
            text.textContent = `round: ${round} Human win the round!`;
            humanScore++;
        }
        
        else text.textContent = `round: ${round} Round is a draw!`;
        console.log(round);

    }
    
    else if (humanScore === 5) text.textContent = "Human Wins!";
    else text.textContent = "Computer Wins!";

    score.textContent = `human: ${humanScore} computer: ${computerScore}`;
}

for(const button of nodeList) {
    button.addEventListener("click", () => {
        round++;
        playRound(button.getAttribute("class"));
    });
}



