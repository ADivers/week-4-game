$(document).ready(function() {

// Variables*******************************************
 
var randomnumber = Math.floor((Math.random() * 120) + 20);
var crystal1 = Math.floor((Math.random() * 10) + 2);
var crystal2 = Math.floor((Math.random() * 10) + 2);
var crystal3 = Math.floor((Math.random() * 10) + 2);
var crystal4 = Math.floor((Math.random() * 10) + 2);
var totalscore = 0;
var wins = 0;
var losses = 0;
var newscore = 0;

// $(document).click(function() {
// console.log("click");
// console.log(crystal1);
// console.log(crystal2);
// console.log(crystal3);
// console.log(crystal4);
// });

///////////FUNCTIONS////////////////////

function reset() {
	randomnumber = Math.floor((Math.random() * 120) + 20);
	crystal1 = Math.floor((Math.random() * 10) + 2);
	crystal2 = Math.floor((Math.random() * 10) + 2);
	crystal3 = Math.floor((Math.random() * 10) + 2);
	crystal4 = Math.floor((Math.random() * 10) + 2);
	totalscore = 0;
	$("#Randomtext").html("Random number: "+randomnumber);
}

function loserloser() {
	alert("You lose!");
	losses++;
	$("#lossestext").html("Losses: "+losses);
	reset();
}

function winnerwinner() {
	alert("You Win!!");
	wins++;
	$("#winstext").html("Wins: "+wins);
	reset();
}

var scores = {
crystal1fun: function() {
	console.log(crystal1);
	totalscore=crystal1+totalscore;
	$("#scoretext").html(totalscore);
	if (totalscore == randomnumber) {
		winnerwinner();
	}
	else if (totalscore>randomnumber){
		loserloser();
		}
	},
crystal2fun: function() {
	console.log(crystal2);
	totalscore=crystal2+totalscore;
	$("#scoretext").html(totalscore);
	if (totalscore == randomnumber) {
		winnerwinner();
	}
	else if (totalscore>randomnumber){
		loserloser();
		}
	},
crystal3fun: function() {
	console.log(crystal3);
	totalscore=crystal3+totalscore;
	$("#scoretext").html(totalscore);
	if (totalscore == randomnumber) {
		winnerwinner();
	}
	else if (totalscore>randomnumber){
		loserloser();
		}
	},
crystal4fun: function() {
	console.log(crystal4);
	totalscore=crystal4+totalscore;
	$("#scoretext").html(totalscore);
	if (totalscore == randomnumber) {
		winnerwinner();
	}
	else if (totalscore>randomnumber){
		loserloser();
	}
	}
}


//////////Jqueriessss/////////////////////////////
 $("#button-1").click(scores.crystal1fun);
  $("#button-2").click(scores.crystal2fun);
  $("#button-3").click(scores.crystal3fun);
  $("#button-4").click(scores.crystal4fun);
	
$("#Randomtext").html("Random number: "+randomnumber);
$("#scoretext").html(totalscore);
$("#lossestext").html("Losses: "+losses);
$("#winstext").html("Wins: "+wins);





});