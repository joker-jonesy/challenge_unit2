const player1Button  =document.getElementById("player1")
const player2Button  =document.getElementById("player2")
const player1ScoreEle  =document.getElementById("player1score")
const player2ScoreEle  =document.getElementById("player2score")
const resetButton = document.getElementById("reset")

//write a game class that holds the game logic
// when a user clicks on a player button, it increments that player's score by 1
// once a player reaches 5, they win the game
// when clicking on the reset button, itll reset the game. Do not refresh the page to reset

//on start-up, game runs

// while not required, it may be wise to create a player class for this example

// this below is the variable used for the first game on load;
let game;

//below are the created event listeners for you all. You do not need to create any additional elements or calls to the HTML

player1Button.addEventListener("click",()=>{
//     increment player 1's score
})

player2Button.addEventListener("click",()=>{
//     increment player 2's score
})

resetButton.addEventListener("click",()=>{
// reset game
})

// use the function below to write into the ele based on the player you want to write into ex: if i want to update player 1, use player1ScoreEle
// depending on your knowledge, you technically would not need to call this function anywhere, but instead write it somewhere else differently

// ex of call: writeScore(player1ScoreEle, ...)

function writeScore (ele,score){
    ele.innerHTML=score;
}