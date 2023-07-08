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

/************     Function for a single Round game. *****************
The value in the parentesis() in the return statement indicates either the value selected by the Player or Computer
as thier choice.  OR the player of the game, either the Computer or the userPlayer.)***********************/


function playRound(playerSelection, computerSelection){

	if(playerSelection==computerSelection){
		winner.push({winner:'Tie'});
		return "THERE IS NO WINNER! WE HAVE A TIE";
	}
	else if(playerSelection==rock || computerSelection==rock){
		if(playerSelection==rock && computerSelection==paper){
			 winner.push({winner:paper,player:'Computer'});
			 return "The winner is: Computer(paper)! Because Paper beats Rock(Player).";
		}
		else if(playerSelection==paper && computerSelection==rock){
			winner.push({winner:paper,player:'Player'});
			return "The winner is: Player(paper)! Because Paper beats Rock(Computer).";
		}
		else if(playerSelection==rock && computerSelection==scissors){
			winner.push({winner:rock,player:'Player'});
			return "The winner is: Player(rock)! Because Rock beats Scissors(Computer)."
		}
		else if(playerSelection==scissors && computerSelection==rock){
			winner.push({winner:rock,player:'Computer'});
			return "The winner is Computer(rock)! Because Rock beats Scissors(Player)."
		}
	}


	else if(playerSelection==paper || computerSelection==paper){
		if(playerSelection==paper && computerSelection==rock){
			winner.push({winner:paper,player:'Player'});
			return "The winner is: Player(paper)! Because Paper beats Rock(Computer)."
		}
		else if(playerSelection==rock && computerSelection==paper){
			winner.push({winner:paper,player:'Computer'});
			return "The winner is: Computer(paper)! Because Paper beats Rock(Player)."
		}
		else if(playerSelection==paper && computerSelection==scissors){
			winner.push({winner:scissors,player:'Computer'});
			return "The winner is: Computer(scissors)! Because Scissors beats Paper(Player)."
		}
		else if(playerSelection==scissors && computerSelection==paper){
			winner.push({winner:scissors,player:'Player'});
			return "The winner is: Player(scissors)! Because Scissors beats Paper(Computer).";
		}
	}


	else{
		if(playerSelection==scissors||computerSelection==scissors){
			if(playerSelection==scissors && computerSelection==rock){
				winner.push({winner:rock,player:'Computer'});
				return "The winner is: Computer(rock)! Because Rock beats Scissors(Player).";
			}
			else if(playerSelection==rock && computerSelection==scissors){
				winner.push({winner:rock,player:'Player'});
				return "The winner is: Player(rock)! Because Rock beats Scissors(Computer).";
			}
			else if(playerSelection==scissors && computerSelection==paper){
				winner.push({winner:scissors,player:'Player'});
				return "The winner is: Player(scissors)! Because Scissors beats Paper(Computer)."
			}
			else if(playerSelection==paper && computerSelection==scissors){
				winner.push({winner:scissors,player:'Computer'});
				return "The winner is: Computer(scissors)! Because Scissors beats Paper(Player).";
			}
		}
	}

}
