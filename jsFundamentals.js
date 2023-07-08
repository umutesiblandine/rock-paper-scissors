let gameSymbols = ['rock','paper','scissors'];
let rock ="rock";
let paper = "paper";
let scissors = "scissors";
let winner =[];

/*Function that gets the computer's choice */

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
let Player="Player";
let Computer="Computer";

/************     Function for a single Round game. *****************
The value in the parentesis() in the return statement indicates either the value selected by the Player or Computer
as thier choice.  OR the player of the game, either the Computer or the userPlayer.)***********************/

/* playerSelection contains the player's choice of the game
 computerSelection contains the computer's choice of the game */

function playRound(playerSelection, computerSelection,i){

	if(playerSelection==computerSelection){
		winner.push({winner:'Tie'});
		return `${Player}'s Choice was: ${playerSelection}, ${Computer}'s Choice was: ${computerSelection}. ---> Round: ${i}. THERE IS NO WINNER! WE HAVE A TIE.`;
	}
	else if(playerSelection==rock || computerSelection==rock){
		if(playerSelection==rock && computerSelection==paper){
			 winner.push({winner:paper,player:'Computer'});
			 return `${Player}'s Choice was: ${playerSelection}, ${Computer}'s Choice was: ${computerSelection}. ---> The winner of Round: ${i} is: ${Computer}! ${computerSelection} beats ${playerSelection}.`;
		}
		else if(playerSelection==paper && computerSelection==rock){
			winner.push({winner:paper,player:'Player'});
			return `${Player}'s Choice was: ${playerSelection}, ${Computer}'s Choice was: ${computerSelection}. ---> The winner of Round: ${i} is: ${Player}! ${playerSelection} beats ${computerSelection}.`;
		}
		else if(playerSelection==rock && computerSelection==scissors){
			winner.push({winner:rock,player:'Player'});
			return `${Player}'s Choice was: ${playerSelection}, ${Computer}'s Choice was: ${computerSelection}. ---> The winner of Round: ${i} is: ${Player}! ${playerSelection} beats ${computerSelection}.`;
		}
		else if(playerSelection==scissors && computerSelection==rock){
			winner.push({winner:rock,player:'Computer'});
			return `${Player}'s Choice was: ${playerSelection}, ${Computer}'s Choice was: ${computerSelection}. ---> The winner of Round: ${i} is: ${Computer}! ${computerSelection} beats ${playerSelection}.`;
		}
	}


	else if(playerSelection==paper || computerSelection==paper){
		if(playerSelection==paper && computerSelection==rock){
			winner.push({winner:paper,player:'Player'});
			return `${Player}'s Choice was: ${playerSelection}, ${Computer}'s Choice was: ${computerSelection}. ---> The winner of Round: ${i} is: ${Player}! ${playerSelection} beats ${computerSelection}.`;
		}
		else if(playerSelection==rock && computerSelection==paper){
			winner.push({winner:paper,player:'Computer'});
			return `${Player}'s Choice was: ${playerSelection}, ${Computer}'s Choice was: ${computerSelection}. ---> The winner of Round: ${i} is: ${Computer}! ${computerSelection} beats ${playerSelection}.`;
		}
		else if(playerSelection==paper && computerSelection==scissors){
			winner.push({winner:scissors,player:'Computer'});
			return `${Player}'s Choice was: ${playerSelection}, ${Computer}'s Choice was: ${computerSelection}. ---> The winner of Round: ${i} is: ${Computer}! ${computerSelection} beats ${playerSelection}.`;
		}
		else if(playerSelection==scissors && computerSelection==paper){
			winner.push({winner:scissors,player:'Player'});
			return `${Player}'s Choice was: ${playerSelection}, ${Computer}'s Choice was: ${computerSelection}. ---> The winner of Round: ${i} is: ${Player}! ${playerSelection} beats ${computerSelection}.`;
		}
	}


	else{
		if(playerSelection==scissors||computerSelection==scissors){
			if(playerSelection==scissors && computerSelection==rock){
				winner.push({winner:rock,player:'Computer'});
				return `${Player}'s Choice was: ${playerSelection}, ${Computer}'s Choice was: ${computerSelection}. ---> The winner of Round: ${i} is: ${Computer}! ${computerSelection} beats ${playerSelection}.`;

			}
			else if(playerSelection==rock && computerSelection==scissors){
				winner.push({winner:rock,player:'Player'});
				return `${Player}'s Choice was: ${playerSelection}, ${Computer}'s Choice was: ${computerSelection}. ---> The winner of Round: ${i} is: ${Player}! ${playerSelection} beats ${computerSelection}.`;

			}
			else if(playerSelection==scissors && computerSelection==paper){
				winner.push({winner:scissors,player:'Player'});
				return `${Player}'s Choice was: ${playerSelection}, ${Computer}'s Choice was: ${computerSelection}. ---> The winner of Round: ${i} is: ${Player}! ${playerSelection} beats ${computerSelection}.`;

			}
			else if(playerSelection==paper && computerSelection==scissors){
				winner.push({winner:scissors,player:'Computer'});
				return `${Player}'s Choice was: ${playerSelection}, ${Computer}'s Choice was: ${computerSelection}. ---> The winner of Round: ${i} is: ${Computer}! ${computerSelection} beats ${playerSelection}.`;

			}
		}
	}

}


/*** Function for a 5 round Game **************/

function game (){

	for(let i=1;i<=5;i++){
		playerSelection = prompt(`game round: ${i}. What is your choice: Rock, Paper or, Scissors ?`).toLowerCase();
		if(gameSymbols.includes(playerSelection)){
			computerSelection = getComputerChoice();
			console.log(playRound(playerSelection,computerSelection,i));

		}
		/******* In case the player enters the wrong choice, an alert pops up to inform them and allows them
		to reenter the choice again. Execution of the game holds until they enter the correct choice*********/
		else{
			alert('You entered the wrong choice. please make sure you are typing your respose correctly among the 3 choices presented to you');
			i--;
		}
	}

	/*A line that marks the first section, which displays the winner of each round.*/
	console.log('--------------------------------------------------------------------');
	let PlayerWins=0;
	let computerWins=0;
	let ties = 0;
	for(let prop in winner){
	 	if(winner[prop]['player']=="Computer"){
	 		computerWins++;
 		}
	 	else if(winner[prop]['player']=="Player"){
	 		PlayerWins++;
	 	}
	 	else{
			ties ++;
	 	}
	 }

	console.log('Player wins=  ',PlayerWins);
	console.log('computer wins=  ', computerWins);
	console.log('ties=  ' ,ties);

	/*   A line that marks the second Section, which displays the summary of each player after 5 rounds  *******/
	console.log('--------------------------------------------------------------------');

	/*This is the third section, it displays the Winner of the GAME*/

	if(PlayerWins>computerWins){
		console.log("The winner of the Game is:  Player!");
	}
	else if(PlayerWins<computerWins){
		console.log("The winner of the Game is:  Computer!")
	}
	else{
		console.log("THERE IS NO WINNER! WE HAVE A TIE.");
	}
	
}

game();
