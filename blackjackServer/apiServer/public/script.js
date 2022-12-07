
function startButton() {
    console.log('hello');

    fetch('/startGame', { method: 'POST' })
        .then((response) => response.json())
        .then((game) => {

            //playerHand

            console.log(game.playerHand);

            let playerHanD = document.querySelector("div#playerHand");
            while (playerHanD.firstChild) {
                console.log("removing child from player hand")
                playerHanD.removeChild(playerHanD.firstChild);
            }

            let imgPlayer = document.createElement("img");

            for (card of game.playerHand) {
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

                imgPlayer.src = `/images/${j}_of_${card.suit}.png`;
                imgPlayer.setAttribute("width", 100);
                imgPlayer.setAttribute("height", 150);
                console.log(imgPlayer.src);
                playerHanD.appendChild(imgPlayer);
            }


            //dealerHand
            console.log(game.dealerHand);

            let dealerHanD = document.querySelector("div#dealerHand");
            while (dealerHanD.firstChild) {
                console.log("removing child from dealer hand")
                dealerHanD.removeChild(dealerHanD.firstChild);
            }

            let imgDealer = document.createElement("img");

            for (card of game.dealerHand) {
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

                imgDealer.src = `/images/${k}_of_${card.suit}.png`;
                imgDealer.setAttribute("width", 100);
                imgDealer.setAttribute("height", 150);
                console.log(imgDealer.src);
                dealerHanD.appendChild(imgDealer);
            }


            let textStuff = document.querySelector("#gameState")
            textStuff.textContent = `game state: winner: ${game.winner} message: ${game.message}`;
        })

}

function hitButton() {
    fetch('/hit', { method: 'POST' })
        .then((response) => response.json())
        .then((game) => {

            //playerHand

            console.log(game.playerHand);

            let playerHanD = document.querySelector("div#playerHand");
            while (playerHanD.firstChild) {
                console.log("removing child from player hand")
                playerHanD.removeChild(playerHanD.firstChild);
            }

            let imgPlayer = document.createElement("img");

            for (card of game.playerHand) {
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

                imgPlayer.src = `/images/${j}_of_${card.suit}.png`;
                imgPlayer.setAttribute("width", 100);
                imgPlayer.setAttribute("height", 150);
                console.log(imgPlayer.src);
                playerHanD.appendChild(imgPlayer);
            }


            //dealerHand
            console.log(game.dealerHand);

            let dealerHanD = document.querySelector("div#dealerHand");
            while (dealerHanD.firstChild) {
                console.log("removing child from dealer hand")
                dealerHanD.removeChild(dealerHanD.firstChild);
            }

            let imgDealer = document.createElement("img");

            for (card of game.dealerHand) {
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

                imgDealer.src = `/images/${k}_of_${card.suit}.png`;
                imgDealer.setAttribute("width", 100);
                imgDealer.setAttribute("height", 150);
                console.log(imgDealer.src);
                dealerHanD.appendChild(imgDealer);
            }


            let textStuff = document.querySelector("#gameState")
            textStuff.textContent = `game state: winner: ${game.winner} message: ${game.message}`;
        })
}

function standButton() {
    fetch('/stand', { method: 'POST' })
        .then((response) => response.json())
        .then((game) => {

            //playerHand

            console.log(game.playerHand);

            let playerHanD = document.querySelector("div#playerHand");
            while (playerHanD.firstChild) {
                console.log("removing child from player hand")
                playerHanD.removeChild(playerHanD.firstChild);
            }

            let imgPlayer = document.createElement("img");

            for (card of game.playerHand) {
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

                imgPlayer.src = `/images/${j}_of_${card.suit}.png`;
                imgPlayer.setAttribute("width", 100);
                imgPlayer.setAttribute("height", 150);
                console.log(imgPlayer.src);
                playerHanD.appendChild(imgPlayer);
            }


            //dealerHand
            console.log(game.dealerHand);

            let dealerHanD = document.querySelector("div#dealerHand");
            while (dealerHanD.firstChild) {
                console.log("removing child from dealer hand")
                dealerHanD.removeChild(dealerHanD.firstChild);
            }

            let imgDealer = document.createElement("img");

            for (card of game.dealerHand) {
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

                imgDealer.src = `/images/${k}_of_${card.suit}.png`;
                imgDealer.setAttribute("width", 100);
                imgDealer.setAttribute("height", 150);
                console.log(imgDealer.src);
                dealerHanD.appendChild(imgDealer);
            }


            let textStuff = document.querySelector("#gameState")
            textStuff.textContent = `game state: winner: ${game.winner} message: ${game.message}`;
        })
}

const start = document.getElementById("startGame");
const hit = document.getElementById("hit");
const stand = document.getElementById("stand");

start.addEventListener("click", startButton(), false);
hit.addEventListener("click", hitButton(), false);
stand.addEventListener("click", standButton(), false);

