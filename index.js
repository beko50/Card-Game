let firstCard = 0;
let secondCard = 21;
let sum = firstCard + secondCard +9;
let hasBlackJack = false;
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")


function startGame(){
    sumEl.textContent = "Sum: " + sum
    if(sum <= 20){
    message = "Do you want to draw a new card?"
}else if(sum === 21){
    message = "Wohoo! You've got Blackjack"
    hasBlackJack = true
} else{
    message = "You're out of the game" 
    isAlive = false
}
messageEl.textContent = "Message: " + message
}
