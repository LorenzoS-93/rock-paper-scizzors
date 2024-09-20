//declaration
const options = ["rock", "paper", "scizzors"];
let humanScore = 0;
let computerScore = 0;
// create a container for the n buttons
const container = document.createElement("div");
document.body.appendChild(container);

let docFrag = document.createDocumentFragment();
for (let i=0; i < options.length ; i++){
     let elem = document.createElement("button");
     elem.setAttribute("class", options[i]);
     elem.textContent = options[i];
     docFrag.appendChild(elem);
}
container.appendChild(docFrag);

function getComputerChoice() {
    return Math.floor(Math.random() * options.length);
}

function mod(n, m) {
    return ((n % m) + m) % m;
}

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
    const computerChoice = getComputerChoice();
    if(computerChoice === mod(options.indexOf(humanChoice) + 1, options.length)) {
        alert("Computer wins");
        computerScore++;
    }
        
    else if(computerChoice === mod(options.indexOf(humanChoice) - 1, options.length)) {
        alert("Human wins");
        humanScore++;
    }

    else alert(`Same choice! No one wins!`);
}

const nodeList = document.querySelectorAll("button");

[].forEach.call(nodeList,function(e) {
    e.addEventListener("click", () => {
        playRound(e.getAttribute("class"));
    });
});


