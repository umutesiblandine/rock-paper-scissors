let gameSymbols = ['rock','paper','scissors'];
let rock ="rock";
let paper = "paper";
let scissors = "scissors";

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
