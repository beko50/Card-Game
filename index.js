let firstCard = getRandomCard()   //invoking the getRandom function to the variable
let secondCard = getRandomCard()
const cards = [firstCard, secondCard]
let sum = firstCard + secondCard;
let hasBlackJack = false; //boolean value
let isAlive = false;   //boolean value before game starts
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
//Players info using OBJECTS
let player = {
    name : "Bernard",
    chips : 456
}
player.chips = Math.floor(Math.random()*1000) // randomizes player chips
let playerEl =document.getElementById("player-el") 
playerEl.textContent = player.name + " : $" + player.chips

function getRandomCard(){
    return Math.floor(Math.random()*13) +1; //randomize numbers b/n 1 and 13
}

function startGame(){
    isAlive = true;
    sumEl.textContent = "Sum: " + sum  //display result on sum element id
    cardEl.textContent = "Card: " 

    for(let i=0;i<cards.length;i++){
        cardEl.textContent += cards[i] + " ";
    }

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

function newCard(){
    if(isAlive==true && hasBlackJack == false){
        let card = getRandomCard();
        sum+=card
        //pushing the cards to the cards array
        cards.push(card)
        startGame()    //calls the function startGame 
    }
    
}
