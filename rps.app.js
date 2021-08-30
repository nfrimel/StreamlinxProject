//setting variables
var userScore = 0;
var computerScore =0;
var totalNumber = 0;
var computerChoice = "";

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const user_div = document.getElementById("user-label");
const computer_div = document.getElementById("computer-label");
const totalNumber_div = document.getElementById("totalNumber-label");
const choices_div = document.getElementById("choices");
const choicesAnimationRock_div = document.getElementById("choicesAnimationRock");
const choicesAnimationPalm_div = document.getElementById("choicesAnimationPalm");
const choiceAnimationRock_div = document.getElementById("choiceAnimationRock");
const rockLeft_div = document.getElementById("rockLeft");
const rockRight_div = document.getElementById("rockRight");
const final_div = document.getElementById("final");
let computerSelection = "";

// function to get a randomly generated choice that the computer will use
function getComputerChoice(){
    const choices =["rock","paper","scissors"];
    const randomNumber = (Math.floor(Math.random()*3));
    return choices[randomNumber];
}

//sets the score for the user
//displays users win message along with css for a win
//timeout is set to wait for the animation of rock paper scissors
function Win(user, computer){
    userScore++;
    setTimeout(function() {userScore_span.innerHTML= userScore;}, 3500)
    setTimeout(function() {computerScore_span.innerHTML = computerScore;}, 3500)
    setTimeout(function() {result_p.innerHTML = user + " beats " + computer + ". You WIN 😋"}, 3500)
    setTimeout(function() {user_div.classList.add("green-glow")}, 3500) 
    setTimeout(function() { user_div.classList.remove("green-glow")}, 4500)
}

//sets the score for the computer
//displays users lose message along with css for a lose
//timeout is set to wait for the animation of rock paper scissors
function Lose(user, computer){
    computerScore++;
    setTimeout(function() {userScore_span.innerHTML= userScore;}, 3500)
    setTimeout(function() {computerScore_span.innerHTML = computerScore;}, 3500)
    setTimeout(function() {result_p.innerHTML = user + " loses to " + computer + ". You Lose 🤬"}, 3500)
    setTimeout(function() {computer_div.classList.add("red-glow")}, 3500)
    setTimeout(function() { computer_div.classList.remove("red-glow")}, 4500)
}

//displays draw message along with css for a draw 
//timeout is set to wait for the animation of rock paper scissors
function Draw(user, computer){
    setTimeout(function() {result_p.innerHTML = user + " equals " + computer + ". You TIE 😐"}, 3500)
    setTimeout(function() {user_div.classList.add("gray-glow")}, 3500)
    setTimeout(function() {computer_div.classList.add("gray-glow")}, 3500)
    
    setTimeout(function() { user_div.classList.remove("gray-glow")}, 4500)
    setTimeout(function() { computer_div.classList.remove("gray-glow")}, 4500)
}




//calls function to get computers choice sets it to variable computerChoice
//uses switch statement to determine who won between the computer and user
//gets users choice 
//calls the result image function to then display the proper image based on user choice and computer choice 
function Game(userChoice){
computerChoice = getComputerChoice();

console.log(userChoice);
console.log(computerChoice);

    switch (userChoice + computerChoice) {
        
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            console.log(userChoice +  computerChoice)
            console.log("USERS WIN")
            Win(userChoice, computerChoice);
            resultImage(userChoice, computerChoice);
            break;
            
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            console.log(userChoice + computerChoice)
            console.log("USERS LOSE")
            Lose(userChoice, computerChoice);
            resultImage(userChoice, computerChoice);
            break;

        default:
            console.log(userChoice + computerChoice)
            console.log("TIE");
            Draw(userChoice, computerChoice);
            resultImage(userChoice, computerChoice);

    }
}

//function to get total numbers of games play to then display it on the screen
function totalNumberAdder(){
    totalNumber++;
    totalNumber_div.innerHTML= totalNumber;
}

//removes the user choices for a 5 second time frame
function hideChoices(){
    choices_div.classList.add("hide-choices");
    setTimeout(function() {choices_div.classList.remove("hide-choices")}, 5000)
}

//sets animation function to display the left hand and palm movements along with the right hand and palm movement
function showAnimation(){
    choicesAnimationRock_div.classList.add("show-animation");
    choicesAnimationPalm_div.classList.add("show-animation");
    
    rockLeft_div.classList.add("left-rock-move")
    setTimeout(function() {rockLeft_div.classList.remove("left-rock-move")}, 3500)
    rockRight_div.classList.add("right-rock-move")
    setTimeout(function() {rockRight_div.classList.remove("right-rock-move")}, 3500)
    setTimeout(function() {choicesAnimationRock_div.classList.remove("show-animation")}, 3500)
    setTimeout(function() {choicesAnimationPalm_div.classList.remove("show-animation")}, 3500)
    rpsP_div();
}

//checks to see user choice and computer choice
//set class name to finalUser
//appends the image to the child of the element 
function resultImage(userChoice, computerChoice){
    
    if(userChoice == "rock"){
        console.log(userChoice +" "+ computerChoice);
        var imgUserRock = document.createElement("img");
        imgUserRock.src = "Images/rockChoiceLeft.png"
        imgUserRock.className = "finalUser"
        var src = document.getElementById("finalChoiceUser");
        src.appendChild(imgUserRock);   
    }

    if(userChoice == "paper"){
        console.log(userChoice);
        var imgUserPaper = document.createElement("img");
        imgUserPaper.src = "Images/paperChoiceLeft.png"
        imgUserPaper.className = "finalUser"
        var src = document.getElementById("finalChoiceUser");
        src.appendChild(imgUserPaper);   
    }

    if(userChoice == "scissors"){
        console.log(userChoice);
        var imgUserScissors = document.createElement("img");
        imgUserScissors.src = "Images/scissorsChoiceLeft.png"
        imgUserScissors.className = "finalUser"
        var src = document.getElementById("finalChoiceUser");
        src.appendChild(imgUserScissors);   
    }

    if(computerChoice == "rock")
    {
        console.log(computerChoice);
        var imgComputerRock = document.createElement("img");
        imgComputerRock.src = "Images/rockChoiceRight.png"
        imgComputerRock.className = "finalComputer"
        var src = document.getElementById("finalChoiceComputer");
        src.appendChild(imgComputerRock); 
    }

    if(computerChoice == "paper")
    {
        console.log(computerChoice);
        var imgComputerPaper = document.createElement("img");
        imgComputerPaper.src = "Images/paperChoiceRight.png"
        imgComputerPaper.className = "finalComputer"
        var src = document.getElementById("finalChoiceComputer");
        src.appendChild(imgComputerPaper); 
    }

    if(computerChoice == "scissors")
    {
        console.log(computerChoice);
        var imgComputerScissors = document.createElement("img");
        imgComputerScissors.src = "Images/scissorsChoiceRight.png"
        imgComputerScissors.className = "finalComputer"
        var src = document.getElementById("finalChoiceComputer");
        src.appendChild(imgComputerScissors); 
    }
}
//sets the css to display the final selected images 
function finalImage(){
    setTimeout(function() {final_div.classList.add("final-choice")}, 3500)
    setTimeout(function() {final_div.classList.remove("final-choice")}, 4800)
    setTimeout(function() {document.getElementById("finalChoiceUser").innerHTML = "" }, 4800)
    setTimeout(function() {document.getElementById("finalChoiceComputer").innerHTML = "" }, 4800)
    
}
//sets the P tag to display in intervals of Rock paper Scissors
function rpsP_div(){
    result_p.innerHTML = "ROCK"
    setTimeout(function() {result_p.innerHTML = "PAPER"}, 1200)
    setTimeout(function() {result_p.innerHTML = "SCISSORS"}, 2200)
    setTimeout(function() {result_p.innerHTML = "SHOOT! "}, 3200)
}

//calls all the functions to run the game based of which selection the user chose
function main(){
    rock_div.addEventListener('click', function(){
        totalNumberAdder();
        hideChoices();
        showAnimation();
        Game("rock");
        finalImage()
    })
    paper_div.addEventListener('click', function(){
        totalNumberAdder();
        hideChoices();
        showAnimation();
        Game("paper");
        finalImage()
    })
    scissors_div.addEventListener('click', function(){
        totalNumberAdder();
        hideChoices();
        showAnimation();
        Game("scissors");
        finalImage()
    })
}

main();