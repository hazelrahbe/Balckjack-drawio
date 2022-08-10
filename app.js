let suits = ['diamonds', 'hearts', 'clubs', 'spades'];
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
let playerCard = document.querySelector('.player')
let dealerCard = document.querySelector('.dealer')


function startGame() {
    playerHand = []
    let playerCard1 = deck.pop()
    let playerCard2 = deck.pop()
    playerHand.push(playerCard1)
    playerHand.push(playerCard2)
    document.querySelector('.playerText').innerHTML = (playerHand)
    document.querySelector('.playerText').innerHTML = (calculateTotal(playerHand))
    appendCard(playerHand[0], playerCard)
    appendCard(playerHand[1], playerCard)

    dealerHand = []
    let dealerCard1 = deck.pop()
    let dealerCard2 = deck.pop()
    dealerHand.push(dealerCard1)
    dealerHand.push(dealerCard2)
    document.querySelector('.dealerText').innerHTML = (dealerHand)
    document.querySelector('.dealerText').innerHTML = (calculateTotal(dealerHand))
    appendCard(dealerHand[0], dealerCard)
    appendCard(dealerHand[1], dealerCard)  
}
 
newGame.addEventListener('click', startGame)

function calculateTotal(hand) {
    let total = 0;
    hand.forEach(card => {
        if(card.points === 'J' || card.points === 'Q' || card.points === 'K') total += 10;
        else if(card.points === 'A') total += 11;
        else total += card.points;
    });
    return total;
}

function hitMe() {
    playerHand.push(deck[0])
    deck.splice(0, 1)
    if (calculateTotal(playerHand) >= 21) {
        document.querySelector('.playerText').innerHTML = (playerHand)
    alert("You lose")
    }
    document.querySelector('.playerText').innerHTML = (calculateTotal(playerHand))
    // if (dealerHand < 17) {
    // dealerHand.push(deck[0])
    // deck.splice(0, 1)
    // dealerHand.value = dealerHand.value + deck[0]

    // console.log(dealerHand)
    // console.log(dealerHand.value + " Points")
}
 

hitBtn.addEventListener('click', hitMe)

function skipMe() {
    if (dealerHand.value < 17) {
    dealerHand.push(deck[0])
        deck.splice(0, 1)
        document.querySelector('.playerText').innerHTML = (playerHand)
        document.querySelector('.playerText').innerHTML = (dealerHand)
        // (playerHand, dealerHand)
    skipMe();
    }
    else if (calculateTotal(dealerHand)) {
        console.log(dealerHand)
        alert("You win! Dealer Lose");
    }
    else {
        checkPoints()
    }
}

stayBtn.addEventListener('click', skipMe)

function checkPoints() {
    if ( calculateTotal(playerHand) < calculateTotal(dealerHand) || playerHand == 21) {
        alert("You Lose! Dealer Wins!");
        console.log(`Player hand: ${playerHand}, dealer hand: ${dealerHand}`)
    }
    else {
        alert("You Win! Dealer Lose!");
        dc(`Player hand: ${playerHand}, dealer hand: ${dealerHand}`)
    }
}

function appendCard(card, turn) {
    console.log(card)
    let img = document.createElement('img')
    img.src = `./PNG-cards-1.3/${card.points}_of_${card.suite}.png`
    turn.appendChild(img)
    img.style.width = '80px'
    img.style.height = '120px'
}