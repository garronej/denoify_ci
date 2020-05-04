
/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


const scores = [0, 0];
let roundScore = 0;
let activePlayer = 0;



const dice = document.querySelector(".dice");
dice.style.display = "none";

document
    .querySelector(".btn-roll")
    .addEventListener("click", () => {

        const diceNumber = Math.floor(Math.random() * 6 + 1);
        const activePlayerCurrent = document.getElementById(`current-${activePlayer}`);

        dice.style.display = "block";
        dice.src = `dice-${diceNumber}.png`;


        if (diceNumber !== 1) {

            roundScore += diceNumber;
            activePlayerCurrent.innerText = roundScore;
            return;

        }

        activePlayerCurrent.innerText = "0";
        roundScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0


        for( const i of [ 0, 1 ]){
            document
                .querySelector(`.player-${i}-panel`)
                .classList
                .toggle("active")
                ;
        }

    })
    ;
