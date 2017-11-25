/**
 * This is the JavaScript style file for the personal web page.
 */
var accordion = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < accordion.length; i++) {
    accordion[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}

//Test hobby guess input function
function checkHobby(guess) {
	var guess = document.getElementById("guess").value;
	if(guess === "Metroid Prime") {
		alert("Correct!");
	} else {
		alert("Nope. Try again!");
	}
}
