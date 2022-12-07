
function startButton() {
    console.log('hello');

    fetch('http://localhost:3000/startGame', {method:'POST'})
    .then((response) => response.json())
    .then((data) => console.log(data))

    //playerHand

    let playerHanD = document.querySelector("div#playerHand");
    while (playerHanD.firstChild){
        playerHanD.removeChild(playerHanD.firstChild);
    }

    this.img = document.createElement("img");
    
for(card of game.playerHand){
    let j = card.value;
    if (card.value == 11) {
        j = "jack";
       
    }
    else if (card.value == 12) {
        j = "queen";
     
    }
    else if (card.value == 13) {
        j = "king";
        
    } 
    if (card.value == 14) {		
        j = "ace";
      
    }
    return j;
}
    this.img.src = `/images/ ${j}_of_${game.playerHand.suit}.png`;
    src = getElementById("image");
    src.appendChild(this.img);

    //dealerHand

    let dealerHanD = document.querySelector("div#dealerHand");
    while (dealerHanD.firstChild){
        dealerHanD.removeChild(dealerHanD.firstChild);
    }

    this.img = document.createElement("img");
    
for(card of game.dealerHand){
    let k = card.value;
    if (card.value == 11) {
        k = "jack";
       
    }
    else if (card.value == 12) {
        k = "queen";
     
    }
    else if (card.value == 13) {
        k = "king";
        
    } 
    if (card.value == 14) {		
        k = "ace";
      
        
    }
    return k;
}
    this.img.src = `/images/ ${j}_of_${game.dealerHand.suit}.png`;
    src = getElementById("image");
    src.appendChild(this.img);
   
    let textStuff = document.querySelector("div.text")
    let p = document.createElement('p');
    p.textContent = `game state: ${game.winner} ${game.message}`;
    textStuff.appendChild(p);
    
  
  }

function hitButton() {
  fetch('http://localhost:3000/hit', {method:'POST'})
    .then((response) => response.json())
    .then((data) => console.log(data))

    //playerHand

    let playerHanD = document.querySelector("div#playerHand");
    while (playerHanD.firstChild){
        playerHanD.removeChild(playerHanD.firstChild);
    }

    this.img = document.createElement("img");
    
for(card of game.playerHand){
    let j = card.value;
    if (card.value == 11) {
        j = "jack";
       
    }
    else if (card.value == 12) {
        j = "queen";
     
    }
    else if (card.value == 13) {
        j = "king";
        
    } 
    if (card.value == 14) {		
        j = "ace";
      
    }
    return j;
}
    this.img.src = `/images/ ${j}_of_${game.playerHand.suit}.png`;
    src = getElementById("image");
    src.appendChild(this.img);

    //dealerHand

    let dealerHanD = document.querySelector("div#dealerHand");
    while (dealerHanD.firstChild){
        dealerHanD.removeChild(dealerHanD.firstChild);
    }

    this.img = document.createElement("img");
    
for(card of game.dealerHand){
    let k = card.value;
    if (card.value == 11) {
        k = "jack";
       
    }
    else if (card.value == 12) {
        k = "queen";
     
    }
    else if (card.value == 13) {
        k = "king";
        
    } 
    if (card.value == 14) {		
        k = "ace";
      
        
    }
    return k;
}
    this.img.src = `/images/ ${j}_of_${game.dealerHand.suit}.png`;
    src = getElementById("image");
    src.appendChild(this.img);
   
    let textStuff = document.querySelector("div.text")
    let p = document.createElement('p');
    p.textContent = `game state: ${game.winner} ${game.message}`;
    textStuff.appendChild(p);
}

function standButton() {
    fetch('http://localhost:3000/stand', {method:'POST'})
    .then((response) => response.json())
    .then((data) => console.log(data));

    //playerHand

    let playerHanD = document.querySelector("div#playerHand");
    while (playerHanD.firstChild){
        playerHanD.removeChild(playerHanD.firstChild);
    }

    this.img = document.createElement("img");
    
for(card of game.playerHand){
    let j = card.value;
    if (card.value == 11) {
        j = "jack";
       
    }
    else if (card.value == 12) {
        j = "queen";
     
    }
    else if (card.value == 13) {
        j = "king";
        
    } 
    if (card.value == 14) {		
        j = "ace";
      
    }
    return j;
}
    this.img.src = `/images/ ${j}_of_${game.playerHand.suit}.png`;
    src = getElementById("image");
    src.appendChild(this.img);

    //dealerHand

    let dealerHanD = document.querySelector("div#dealerHand");
    while (dealerHanD.firstChild){
        dealerHanD.removeChild(dealerHanD.firstChild);
    }

    this.img = document.createElement("img");
    
for(card of game.dealerHand){
    let k = card.value;
    if (card.value == 11) {
        k = "jack";
       
    }
    else if (card.value == 12) {
        k = "queen";
     
    }
    else if (card.value == 13) {
        k = "king";
        
    } 
    if (card.value == 14) {		
        k = "ace";
      
        
    }
    return k;
}
    this.img.src = `/images/ ${j}_of_${game.dealerHand.suit}.png`;
    src = getElementById("image");
    src.appendChild(this.img);
   
    let textStuff = document.querySelector("div.text")
    let p = document.createElement('p');
    p.textContent = `game state: ${game.winner} ${game.message}`;
    textStuff.appendChild(p);
}

const start = document.getElementById("startGame");
const hit = document.getElementById("hit");
const stand = document.getElementById("stand");

start.addEventListener("click", startButton(), false);
hit.addEventListener("click", hitButton(), false);
stand.addEventListener("click", standButton(), false);

