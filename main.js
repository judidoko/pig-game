var scores, roundScore, activePlayer, gamePlaying; 

init();

document.querySelector(".rollDice").addEventListener("click", function(){
    if(gamePlaying){
             // 1. random number
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;

    // 2. display the result
    document.getElementById('diceOne').style.display = 'block';
    document.getElementById('diceTwo').style.display = 'block';
    document.getElementById('diceOne').src = 'dice-' + dice1 + '.png';
    document.getElementById('diceTwo').src = 'dice-' + dice2 + '.png';
    // var diceDom = document.querySelector(".dices");
    // diceDom.style.display = "block";
    // diceDom.src = "dice-" + dice + ".png";
    // 3. update the round score if the rolled num is not 1
    // if player role two 6 he looses current scores
    // if(dice1 === 6 && dice2 === 6){
    //     // player loose current score
    //     scores[activePlayer] = 0;
    //     document.querySelector("#score-" + activePlayer).textContent = "0";
    //     nextPlayer();
      if (dice1 !== 1 && dice2 !== 1 ){
        //add score
        roundScore += dice1 + dice2;
        document.querySelector("#current-"+ activePlayer).textContent = roundScore;
    } else {
        //next player
        nextPlayer();
    }

    }
     
});

document.querySelector(".holdButton").addEventListener("click", function(){
    if(gamePlaying){
         //add current score to Global score
    (scores[activePlayer]) += Number(roundScore);

    // Update the UI
    document.querySelector("#score-" + activePlayer).textContent = Number(scores[activePlayer]);

    var input  = document.querySelector(".finalScore").value;
    var winningScore;
    // undefined, 0 null or "" are coerced to false
    // Anything else is coerced to true
    if(input){
        winningScore = input;
    } else {
        winningScore  = 100;
    }
    //Check if player won the game
    
    if(scores[activePlayer] >= winningScore){
    document.querySelector("#name-" + activePlayer).textContent = "WINNER!"
    document.getElementById('diceOne').style.display = 'none';
    document.getElementById('diceTwo').style.display = 'none';
    document.querySelector(".player-"+ activePlayer).classList.add("winner");
    document.querySelector(".player-"+ activePlayer).classList.remove("winner");
    gamePlaying = false;
    } else {
        //Next player
    nextPlayer();
    }
    }
    
});

function nextPlayer() { 
    activePlayer === 1 ? activePlayer = 2 : activePlayer = 1;
        roundScore = 0;
        document.getElementById("current-1").textContent = 0;
        document.getElementById("current-2").textContent = 0;

        document.querySelector(".rightSide").classList.toggle("active");
        document.querySelector(".leftSide").classList.toggle("active");
        //document.querySelector(".rightSide").classList.remove("active");
        //document.querySelector(".leftSide").classList.add("active");
        document.getElementById('diceOne').style.display = 'none';
        document.getElementById('diceTwo').style.display =  'none';
}
document.querySelector(".newButton").addEventListener("click", init);

function init() {
    scores = [0, 0, 0];
    activePlayer = 1;
    roundScore = 0;
    gamePlaying = true;
    
    document.getElementById('diceOne').style.display = 'none';
    document.getElementById('diceTwo').style.display = 'none';
    document.getElementById("current-1").textContent = 0;
    document.getElementById("current-2").textContent = 0;
    document.getElementById("score-1").textContent = 0;
    document.getElementById("score-2").textContent = 0;
    document.getElementById("name-1").textContent = "player 1"
    document.getElementById("name-2" ).textContent = "player 2" 
    document.querySelector(".player-1").classList.remove("winner");
    document.querySelector(".player-2").classList.remove("winner");
    document.querySelector(".rightSide").classList.remove("active");
    document.querySelector(".leftSide").classList.remove("active"); 
    document.querySelector(".rightSide").classList.add("active");  
}

