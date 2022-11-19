const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.static(`public`));
app.use(express.static(`private`));


// function htmlStart(res, title){
//     res.write(`<!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta http-equiv="X-UA-Compatible" content="IE=edge">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title> ${title} </title>
//     </head>
//     <body>`);
// };
  
// function htmlEnd(res){
//     res.write(`</body>
//     </html>`);
//     res.end();
// };

let deck = [];
let game = {playerHand:[], dealerHand:[], winner: '', message: ''};

 function buildDeck() {

    let count = 0;
        
    for (let i = 1; i <= 13; i++) {
        
        deck.push({suit: `Hearts`, value: i});
    }
    for (let i = 1; i <= 13; i++) {
        deck.push({suit: `Spades`, value: i});
    }
    for (let i = 1; i <= 13; i++) {
        deck.push({suit: `Clubs`, value: i});
    }
    for (let i = 1; i <= 13; i++) {
        deck.push({suit: `Diamonds`, value: i});
    }	
 }    
        
function valueName(){
    
    let name = "";
    
    if (this.value == 1) {		
        name = "Ace";
        cardValue = 1; //or 11
    }
    else if (this.value == 2) {
        name = "Two";
        cardValue = 2;
    }
    else if (this.value == 3) {
        name = "Three";
        cardValue = 3;
    }
    else if (this.value == 4) {
        name = "Four";
        cardValue = 4;
    }
    else if (this.value == 5) {
        name = "Five";
        cardValue = 5;
    }
    else if (this.value == 6) {
        name = "Six";
        cardValue = 6;
    }
    else if (this.value == 7) {
        name = "Seven";
        cardValue = 7;
    }
    else if (this.value == 8) {
        name = "Eight";
        cardValue = 8;
    }
    else if (this.value == 9) {
        name = "Nine";
        cardValue = 9;
    }
    else if (this.value == 10) {
        name = "Ten";
        cardValue = 10;
    }
    else if (this.value == 11) {
        name = "Jack";
        cardValue = 10;
    }
    else if (this.value == 12) {
        name = "Queen";
        cardValue = 10;
    }
    else if (this.value == 13) {
        name = "King";
        cardValue = 10;
    } 
    return name; 
}

// function theCardName() {
//     return deck.suit() + " " + this.value;
// }
// console.log(theCardName());

function shuffleDeck(){

    let tempDeck = [];
    while(deck.length>0){
    let x = deck.length;
    let tempDeckIndex = Math.floor(Math.random() * x);
    tempDeck.push(deck[tempDeckIndex]);
    deck.splice(tempDeckIndex,1);
    }
    deck = tempDeck; 
    console.log(deck);
}

function restartGame(){

    buildDeck();
    shuffleDeck();
    game= {
        playerHand: [],
        dealerHand: [], 
        winner: '', 
        message: ''
    };

    while (game.playerHand.length <2){
        dealCards(deck, game.playerHand);
    }
    while (game.dealerHand.length <2){
        dealCards(deck, game.dealerHand);
    }
    console.log(game.playerHand);
    console.log(game.dealerHand);
    console.log(theCardValue(game.playerHand));
    console.log(theCardValue(game.dealerHand));
    compareHands(game.playerHand, game.dealerHand);
};

function clearHand() {
    numberOfCards = 0;
}

function dealCards(deck, hand){
    hand.push(deck[0]);
    deck.splice(0,1);
}

app.post('/startGame' , (req,res) => {
    restartGame();
    res.json(game);
})

app.post('/hit' , (req,res) => {
    dealCards(deck, game.playerHand);
    console.log(game.playerHand);
    console.log(game.dealerHand);
    console.log(theCardValue(game.playerHand));
    console.log(theCardValue(game.dealerHand));
    compareHands(game.playerHand, game.dealerHand);
    res.json(game);
})

app.post('/stand' , (req,res) => {
    while (theCardValue(game.dealerHand) <17){
        dealCards(deck, game.dealerHand);
    }
    console.log(game.playerHand);
    console.log(game.dealerHand);
    console.log(theCardValue(game.playerHand));
    console.log(theCardValue(game.dealerHand));
    compareHands(game.playerHand, game.dealerHand);
    res.json(game);
})

function theCardValue(hand)
{
    let handVal = 0;
    for (card of hand){
        handVal = handVal + card.value;
    }
    return handVal;
}
    
function compareHands(hand1, hand2)
{
    if (theCardValue(game.playerHand) > 21 ){
        game.winner= 'dealer';
        game.message= 'bust';
        return;
    }

    if (theCardValue(game.dealerHand) > 21 ){
        game.winner =  'player';
        game.message =  'bust';
       return;
    }

    if (21 < theCardValue(game.playerHand) && theCardValue(game.dealerHand)){
    
        game.winner =  'null';
        game.message =  'restart the game';
        return;
    }

    if (theCardValue(game.dealerHand) < theCardValue(game.playerHand)){
       
        game.winner =  'player';
        game.message =  'restart the game';
       
    }

    if (theCardValue(game.playerHand) < theCardValue(game.dealerHand)){
       
        game.winner =  'dealer';
        game.message =  'restart the game';
        
    }

    if (theCardValue(game.playerHand) == theCardValue(game.dealerHand)){
    
        game.winner =  'null';
        game.message =  'restart the game';
       
    }
    
}

app.listen(port,() => {
    console.log(`im listening! (on port ${port})`);
});