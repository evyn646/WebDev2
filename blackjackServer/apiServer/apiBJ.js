const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

function htmlStart(res, title){
    res.write(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title> ${title} </title>
    </head>
    <body>`);
};

function htmlEnd(res){
    res.write(`</body>
    </html>`);
    res.end();
};

    // let deck = [];
    // i=rank
    // j=suite
    // for (let i = 1; i <= 13; i++) {
    //      for (let j = 1; j <= 4; j++) {
    //          deck.push({rank:i, suite:j});
    //         }
    // }
    //clubs = 1
    //diamonds = 2
    //spades = 3
    //hearts = 4
    // return deck;

 function buildDeck() {

        let count = 0;
        
        for (let i = 1; i <= 13; i++) {
            deck[count++] = new Card('H', i);
        }
        for (let i = 1; i <= 13; i++) {
            deck[count++] = new Card('S', i);
        }
        for (let i = 1; i <= 13; i++) {
            deck[count++] = new Card('C', i);
        }
        for (let i = 1; i <= 13; i++) {
            deck[count++] = new Card('D', i);
        }	
 }    
 
    
function toString() {
    return getSuitName() + " " + this.value;
}
    
function getSuitName() {
        let suit;   
        if (this.suit == 'H') {
            suit = "Hearts";    
        }
        else if (this.suit == 'S') {    
            suit = "Spades";    
        }
        else if (this.suit == 'C') {   
            suit = "Clubs";   
        }
        else if (this.suit == 'D') {   
            suit = "Diamonds";
    
        } else {
           suit = "Unknown";
        }
        
            return suit;
        }

        function getSuit() {
    
            return suit;
    
        }
        
        function getValueName(){
    
            let name = "";
    
            if (this.value == 1) {		
                name = "Ace";
            }
            else if (this.value == 2) {
                name = "Two";
            }
            else if (this.value == 3) {
                name = "Three";
            }
            else if (this.value == 4) {
                name = "Four";
            }
            else if (this.value == 5) {
                name = "Five";
            }
            else if (this.value == 6) {
                name = "Six";
            }
            else if (this.value == 7) {
                name = "Seven";
            }
            else if (this.value == 8) {
                name = "Eight";
            }
            else if (this.value == 9) {
    
                name = "Nine";
            }
            else if (this.value == 10) {
    
                name = "Ten";
            }
            else if (this.value == 11) {
    
                name = "Jack";
            }
            else if (this.value == 12) {
    
                name = "Queen";
            }
            else if (this.value == 13) {
    
                name = "King";
    
            } 
            return name;
    
        }
        
    

try{
	function Card (newSuit, newValue) {
    let suit = ' ';
	let value = 0;
    let newSuit;
    let newValue;
		if (newValue < 1 || newValue > 13) {
			let value = newValue;
		} else {
			throw new InvalidCardValueException(newValue);
		}
		if (newSuit != 'H' && newSuit != 'S' && newSuit != 'D' && newSuit != 'C') {
			throw new InvalidCardSuitException(newSuit);
		} else {
			this.suit = newSuit;
		}
		
	}
}

catch{InvalidCardValueException | InvalidCardSuitException };

function shuffleDeck(){

    let tempDeck = [];
    let x = tempDeck.length;
    Math.floor(Math.random() * x)

    deck = tempDeck;

}

function dealCard(deck,hand){
    
}

function restartGame(){
    deck = buildDeck();
    shuffleDeck();
    game= {
        playerHand: [],
        dealerHand: []
    };

    dealCard(deck, game.playerHand);
    dealCard(deack, game.dealerHand);

    dealerHand.clearHand();
    playerHand.clearHand();

    // empty dealer/player hands
    // make a shuffled deck
    // deal to dealer (1 down, 1 up)
    // deal to player (both up)
};

function clearHand() {
    numberOfCards = 0;
}

app.post('/startGame' , (req,res) => {
    // Deals the cards to the players and dealer
function dealCards(){
     
    let j= playerHand.length;
        for (j = 0; j < 2; j++) {
            playerHand[i].addCard(deck.nextCard());
        }
    let i= dealerHand.length;
    for (i = 0; i < 2; i++) {
        dealerHand[i].addCard(deck.nextCard());
    }
    }
})

app.post('/hit' , (req,res) => {
    function addCard(){
        playerHand[i].addCard(deck.nextCard());
        dealerHand[i].addCard(deck.nextCard());
    }
})

app.post('/stand' , (req,res) => {

})

// function nextCard(){
//     deck[nextCardIndex++];
// }

// function cardValue(card)
// {
//     for (card of hand){
//         card.rank
//     }
         
// }

function handValue(hand) {
    htmlStart();

    for (card of playerHand){
        let i = 0; i < N; i++
        for(i = 0; i < N; i++){
    }
    }
    for (card of dealerHand){
        let i = 0; i < N; i++
        for(i = 0; i < N; i++){
    }
    }

    for (cards of dealerHand){

    }

    playerHand.handValue = value;
    dealerHand.handVaule = value;

    if (playerHand > 21){
        res.write(`Bust!!!` /*${other player}*/ `wins!`);
        res.redirect(`/startGame`);
        return;
    }

    htmlEnd(res);
}
    
function compareHands(hand1, hand2)
{
    if (dealerHand.handValue < playerHand.handValue){
        htmlStart();
        res.write(`Player Wins!`);
        htmlEnd(res);
    }

    if (playerHand.handValue < dealerHand.handValue){
        htmlStart();
        res.write(`Dealer Wins!`);
        htmlEnd(res);
    }

    if (playerHand.handValue == dealerHand.handValue){
        htmlStart();
        res.write(`Draw`);
        htmlEnd(res);
    }
    
}

app.listen(port,() => {
    console.log(`im listening! (on port ${port})`);
});