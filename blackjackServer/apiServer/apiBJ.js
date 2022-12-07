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
        
    for (let i = 2; i <= 14; i++) {
        
        deck.push({suit: `hearts`, value: i});
    }
    for (let i = 2; i <= 14; i++) {
        deck.push({suit: `spades`, value: i});
    }
    for (let i = 2; i <= 14; i++) {
        deck.push({suit: `clubs`, value: i});
    }
    for (let i = 2; i <= 14; i++) {
        deck.push({suit: `diamonds`, value: i});
    }	
 }    
        
// function valueName(){
    
//     let j = "";
    
//     if (this.value == 14) {		
//         j = "ace";
//         deck.push({name: j});
//     }
//     else if (this.value == 2) {
//         j = "2";
//         deck.push({name: j});
//     }
//     else if (this.value == 3) {
//         j = "3";
//         deck.push({name: j});
//     }
//     else if (this.value == 4) {
//         j = "4";
//         deck.push({name: j});
//     }
//     else if (this.value == 5) {
//         j = "5";
//         deck.push({name: j});
//     }
//     else if (this.value == 6) {
//         j = "6";
//         deck.push({name: j});
//     }
//     else if (this.value == 7) {
//         j = "7";
//         deck.push({name: j});
//     }
//     else if (this.value == 8) {
//         j = "8";
//         deck.push({name: j});
//     }
//     else if (this.value == 9) {
//         j = "9";
//         deck.push({name: j});
//     }
//     else if (this.value == 10) {
//         j = "10";
//         deck.push({name: j});
//     }
//     else if (this.value == 11) {
//         j = "jack";
//         deck.push({name: j});
//     }
//     else if (this.value == 12) {
//         j = "queen";
//         deck.push({name: j});
//     }
//     else if (this.value == 13) {
//         j = "king";
//         deck.push({name: j});
//     } 
//     return j; 
// }

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
        message: '',
    };

    while (game.playerHand.length <2){
        dealCards(deck, game.playerHand);
    }
    while (game.dealerHand.length <2){
        dealCards(deck, game.dealerHand);
    }
    console.log("player hand");
    console.log(game.playerHand);
    console.log("dealer hand");
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
    console.log("hand value");
    console.log(hand);
    let handVal = 0;
    let aceCounter = 0;

    for (card of hand){
        if(card.value === 14){
            aceCounter = aceCounter +1;
        }

        if (card.value === 14){
            handVal = handVal +11;
        }
        else if (card.value > 10){
            handVal = handVal +10;
        }
        else{
        handVal = handVal + card.value;
        }
    }

    if(handVal > 21 && aceCounter >0){
        handVal = handVal -10;
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