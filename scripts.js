//declaration
const options = ["rock", "paper", "scizzors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function mod(n, m) {
    return ((n % m) + m) % m;
}

function getHumanChoice() {
    let humanChoice = prompt(`Make your choice ${options[0]}, ${options[1]} or ${options[2]}?`);
    return humanChoice;
}

function playRound(humanChoice, computerChoice)
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

    if(computerChoice === mod(options.indexOf(humanChoice) + 1, 3)) {
        alert("Computer wins");
        computerScore++;
    }
        
    else if(computerChoice === mod(options.indexOf(humanChoice) - 1, 3)) {
        alert("Human wins");
        humanScore++;
    }

    else alert(`Same choice! No one wins!`);
}

function playGame()
{

    for(let i = 1; i <= 5; i++)
    {
        const humanSelection = getHumanChoice();
        if (!options.includes(humanSelection)) {
            alert("computer wins!");
            computerScore++;
            continue;
        }
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    if(humanScore > computerScore)
        alert(`human:${humanScore} computer:${computerScore} 
        human wins!`);
    else if(humanScore < computerScore)
        alert(`human:${humanScore} computer:${computerScore} 
        computer wins!`);
    else
        alert(`human:${humanScore} computer:${computerScore} 
    even!`);

}

playGame();

