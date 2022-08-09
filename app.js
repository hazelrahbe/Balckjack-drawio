let suits = ['Diamonds', 'Hearts', 'Clubs', 'Spades'];
let points = ['K', 'Q', 'J', 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10];
let playerHand = []
let dealerHand = []
let deck = new Array();
function deckTable() {
     for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < points.length; j++) {
            let card = {suite: suits[i] , points: points[j]}
            deck.push(card)
        }
    }
    return deck.sort( () => .5 - Math.random() );
}
console.log(deckTable())

let newGame = document.querySelector('.newGame')
let hitBtn = document.querySelector('.hitBtn')
let stayBtn = document.querySelector('.stayBtn')

function startGame() {
    playerHand = []
    let playerCard1 = deck.pop()
    let playerCard2 = deck.pop()
    playerHand.push(playerCard1)
    playerHand.push(playerCard2)
    console.log(playerHand)

    dealerHand = []
    let dealerCard1 = deck.pop()
    let dealerCard2 = deck.pop()
    dealerHand.push(dealerCard1)
    dealerHand.push(dealerCard2)
    console.log(dealerHand)
}
 
newGame.addEventListener('click', startGame)

function hitMe() {
    playerHand.push(deck[0])
    deck.splice(0, 1)
    dealerHand.push(deck[0])
    deck.splice(0, 1)
    console.log(playerHand, dealerHand)
}

hitBtn.addEventListener('click', hitMe)

function skipMe() {
    dealerHand.push(deck[0])
        deck.splice(0, 1)
console.log(playerHand, dealerHand)
}

stayBtn.addEventListener('click', skipMe)

let currentPlayer=0;
function checkPoints() {
    if ()
}