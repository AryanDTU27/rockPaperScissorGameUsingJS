let userscore = 0;
let compscore = 0;

const msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    let compChoice = options[Math.floor(Math.random()*3)];
    return compChoice;
}

const drawGame = () => {
    msg.innerText = "Game was draw. Play Again";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userscore++;
        userScorePara.innerText = userscore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compscore++;
        compScorePara.innerText = compscore;
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.id;
        playGame(userChoice);
    })
})