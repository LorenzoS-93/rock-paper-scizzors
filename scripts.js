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
                         A choice that is not one of the above will lead to an error.
                         Make your choice Rock, Paper or Scizzors?`);
    let str = choice.toLowerCase();
    if((str === "rock") || (str === "paper") || (str === "scizzors")) 
        return str
    console.log("Error! You must choose between rock, paper and scizzors!")
}

function playRound(humanChoice, computerChoice)
{
    if(humanChoice === computerChoice)
    {
        console.log("Same choice! No one wins!")
        return "none";
    }

    if (humanChoice === "rock")
    {
        if(computerChoice === "paper")
        {
            console.log(`${computerChoice} beets ${humanChoice}! Computer wins!`);
            return "computer";
        }
        console.log(`${humanChoice} beets ${computerChoice}! Human wins!`);
        return "human";
    }

    if (humanChoice === "paper")
    {
        if(computerChoice === "scizzors")
        {
            console.log(`${computerChoice} beets ${humanChoice}! Computer wins!`);
            return "computer";
        }
        console.log(`${humanChoice} beets ${computerChoice}! Human wins!`);
        return "human";
    }

    if (humanChoice === "scizzors")
    {
        if(computerChoice === "paper")
        {
            console.log(`${computerChoice} beets ${humanChoice}! Computer wins!`);
            return "computer";
        }
        console.log(`${humanChoice} beets ${computerChoice}! Human wins!`);
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
        const computerSelection = getComputerChoice();

        let winner = playRound(humanSelection, computerSelection);
        if (winner === "human")
            humanScore++;
        if (winner === "computer")
            computerScore++;
    }

    if(humanScore > computerScore)
        console.log("human wins!");
    else if(humanScore < computerScore)
        console.log("computer wins!");
    else
        console.log("even");

}

playGame();

