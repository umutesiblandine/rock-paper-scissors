let gameSymbols = ['rock','paper','scissors'];
let rock ="rock";
let paper = "paper";
let scissors = "scissors";
let winner;
let winnersRecord =[];
let Player="Player";
let Computer="Computer";
let playerSelection,computerSelection;
let playerChoices = document.querySelector('ul');
let outputDiv = document.getElementById('output');
let i=1;
let summary_of_the_game;
let winner_of_the_game;
let winnerOfTheGame
let PlayerWins=0;
let computerWins=0;
let ties=0;
let blinkingParagraph = document.querySelector('h2');

/*Function that gets the computer's choice of Play*/

function getComputerChoice(){
	let pick = Math.floor(Math.random() * 12);
	if(pick>=8 && pick<12){
		return "scissors";
	}
	else if(pick>=4 && pick<8) {
		return "paper";
	}
	else {
		return "rock";
	}	
}

playerChoices.addEventListener('click',runEvent);


/*====  Function that runs whenever a Rock,Paper,Scissors button is clicked When a user makes a play*/

function runEvent(e){
	//logic for having five rounds of play which makes a game
    if(i<=5){
        playerSelection=e.target.id;
        computerSelection=getComputerChoice();
			
        //create a div element to display for a single play results
        
        let div = document.createElement('div');
        div.innerHTML=`<span>Round: ${i}</span><br>${Player}'s Choice: ${playerSelection}<br>${Computer}'s Choice: ${computerSelection} <br>${playRound(playerSelection,computerSelection,i)}`;
        outputDiv.appendChild(div);
			
        i++;
    }
    //Logic that displays the summary of each round play and the the winner after five rounds
    if(i==6){
       	summary_of_the_game = document.getElementById('summary-of-the-game');
        for(let prop in winnersRecord){
			 if(winnersRecord[prop]['player']=="Computer"){
			     computerWins++;
		 	}
            else if(winnersRecord[prop]['player']=="Player"){
			     PlayerWins++;
            }
            else{
				ties ++;
            }
        }
        
        summary_of_the_game.innerHTML=`<p>PlayerWins= ${PlayerWins}</p><p>computerWins= ${computerWins}</p><p>Ties= ${ties}</p>`;
			
        if(PlayerWins>computerWins){
            winner_of_the_game= `The winner of the Game is:  ${Player}!`;
        }
        else if(PlayerWins<computerWins){
            winner_of_the_game = `The winner of the Game is:  ${Computer}!`;
        }
        else{
            winner_of_the_game = `THERE IS NO WINNER! WE HAVE A TIE.`; 
        }
            
        winnerOfTheGame =document.getElementById('winner-of-the-game');
        winnerOfTheGame.innerHTML=`<h3>${winner_of_the_game}</h3>`;
        i++;

        //Blinking div that announces that the game is over after five rounds of play

		let counter =0;
		let clearinterval = setInterval(count,400);
		function count(){
			blinkingParagraph.classList.toggle('red');
			counter++;
			if(counter>5){
			clearInterval(clearinterval);
			}
		}
		blinkingParagraph.classList='red';
    }

}


/************     Function for a single Round game.     *****************/

/* playerSelection receives the player's choice of the game
 computerSelection receives the computer's choice of the game */

function playRound(playerSelection, computerSelection,i){

	if(playerSelection==computerSelection){
		
		winner = `No Winner! We have a TIE.`;
		winnersRecord.push({winner:'Tie'});
		return winner;
		
	}
	else if(playerSelection==rock || computerSelection==rock){
		if(playerSelection==rock && computerSelection==paper){
			
			 winner = `${Computer}! ${computerSelection} beats ${playerSelection}.`;
			 winnersRecord.push({winner:paper,player:'Computer'});
			 return `Winner is: ${winner}`;
			 
		}
		else if(playerSelection==paper && computerSelection==rock){
			
			winner=`${Player}! ${playerSelection} beats ${computerSelection}.`;
			winnersRecord.push({winner:paper,player:'Player'});
			return `Winner is: ${winner}`;
			
		}
		else if(playerSelection==rock && computerSelection==scissors){
			
			winner= `${Player}! ${playerSelection} beats ${computerSelection}.`;
			winnersRecord.push({winner:rock,player:'Player'});
			return `Winner is: ${winner}`;
			
		}
		else if(playerSelection==scissors && computerSelection==rock){
			
			winner = `${Computer}! ${computerSelection} beats ${playerSelection}.`;
			winnersRecord.push({winner:rock,player:'Computer'});
			return `Winner is: ${winner}`;
			
		}
	}


	else if(playerSelection==paper || computerSelection==paper){
		if(playerSelection==paper && computerSelection==rock){
		
			winner = `${Player}! ${playerSelection} beats ${computerSelection}.`;
			winnersRecord.push({winner:paper,player:'Player'});
			return `Winner is: ${winner}`;
			
		}
		else if(playerSelection==rock && computerSelection==paper){
			winner = `${Computer}! ${computerSelection} beats ${playerSelection}.`;
			winnersRecord.push({winner:paper,player:'Computer'});
			return `Winner is: ${winner}`;
		}
		else if(playerSelection==paper && computerSelection==scissors){
			winner = `${Computer}! ${computerSelection} beats ${playerSelection}.`;
			winnersRecord.push({winner:scissors,player:'Computer'});
			return `Winner is: ${winner}`;
		}
		else if(playerSelection==scissors && computerSelection==paper){
			winner = `${Player}! ${playerSelection} beats ${computerSelection}.`;
			winnersRecord.push({winner:scissors,player:'Player'});
			return `Winner is: ${winner}`;
		}
	}


	else{
		if(playerSelection==scissors||computerSelection==scissors){
			if(playerSelection==scissors && computerSelection==rock){
				winner = `${Computer}! ${computerSelection} beats ${playerSelection}.`;
				winnersRecord.push({winner:rock,player:'Computer'});
				return `Winner is: ${winner}`;

			}
			else if(playerSelection==rock && computerSelection==scissors){
				winner = `${Player}! ${playerSelection} beats ${computerSelection}.`;
				winnersRecord.push({winner:rock,player:'Player'});
				return `Winner is: ${winner}`;

			}
			else if(playerSelection==scissors && computerSelection==paper){
				winner = `${Player}! ${playerSelection} beats ${computerSelection}.`;
				winnersRecord.push({winner:scissors,player:'Player'});
				return `Winner is: ${winner}`;

			}
			else if(playerSelection==paper && computerSelection==scissors){
				winner = `${Computer}! ${computerSelection} beats ${playerSelection}.`;
				winnersRecord.push({winner:scissors,player:'Computer'});
				return `Winner is: ${winner}`;

			}
		}
	}

}

function playAgain(){
	blinkingParagraph.classList.toggle('red');
    outputDiv = document.getElementById('output');
    let divChildren = outputDiv.children;
    let summarOfGame = document.getElementById('summary-of-the-game');
    let winnerOfGame = document.getElementById('winner-of-the-game');
    while(outputDiv.firstElementChild!=null){
        outputDiv.removeChild(outputDiv.firstElementChild);
    }
    while(summarOfGame.firstElementChild!=null){
        summarOfGame.removeChild(summarOfGame.firstElementChild);
    }
    while(winnerOfGame.firstElementChild!=null){
        winnerOfGame.removeChild(winnerOfGame.firstElementChild);
    }
    i=1;
    PlayerWins=0;
    computerWins=0;
    ties=0;
    winnersRecord=[];
}

let anotherGame = document.getElementById('play-again');
anotherGame.addEventListener('click',playAgain);
