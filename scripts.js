function getComputerChoice()
{
    let choice = Math.random()

    if(choice <= 1/3)
        return "rock"
    if(choice <= 2/3)
        return "paper"
    return "scizzors"
}

function getHumanChoice()
{
    let choice = prompt(`Disclaimer: The program is not case sensitive
                        A choice that is not one of the above will lead to an 
                        error.
                        Make your choice Rock, Paper or Scizzors?`);
    let str = choice.toLowerCase();
    if((str === "rock") || (str === "paper") || (str === "scizzors")) 
        return str
    return "none"
}

function playRound(humanChoice, computerChoice)
{
    if(humanChoice === computerChoice)
    {
        alert("Same choice! No one wins!")
        return "none";
    }

    if (humanChoice === "rock")
    {
        if(computerChoice === "paper")
        {
            alert(`${computerChoice} beets ${humanChoice}! Computer wins!`);
            return "computer";
        }
        alert(`${humanChoice} beets ${computerChoice}! Human wins!`);
        return "human";
    }

    if (humanChoice === "paper")
    {
        if(computerChoice === "scizzors")
        {
            alert(`${computerChoice} beets ${humanChoice}! Computer wins!`);
            return "computer";
        }
        alert(`${humanChoice} beets ${computerChoice}! Human wins!`);
        return "human";
    }

    if (humanChoice === "scizzors")
    {
        if(computerChoice === "paper")
        {
            alert(`${computerChoice} beets ${humanChoice}! Computer wins!`);
            return "computer";
        }
        alert(`${humanChoice} beets ${computerChoice}! Human wins!`);
        return "human";
    }
}

function playGame()
{
    let humanScore = 0;
    let computerScore = 0;

    for(let i = 1; i <= 5; i++)
    {
        const humanSelection = getHumanChoice();
        if(humanSelection === "none")
        {
            alert("computer wins!")
            break;
        }
        const computerSelection = getComputerChoice();

        let winner = playRound(humanSelection, computerSelection);
        if (winner === "human")
            humanScore++;
        if (winner === "computer")
            computerScore++;
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

