//Drag and drop methods
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    console.log(data);
    ev.target.appendChild(document.getElementById(data));
    console.log(ev.target);
}

//Loading bar method
function move() {
    var elem = document.getElementById("myBar"); 
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (width == 100) {
            clearInterval(id);
        } else {
            width++; 
            elem.style.width = width + '%'; 
        }
    }
}
// Operates loading bar without needing a button
window.onload = function() {
	 var elem = document.getElementById("myBar"); 
	    var width = 0;
	    var id = setInterval(frame, 10);
	    function frame() {
	        if (width == 100) {
	            clearInterval(id);
	        } else {
	            width++; 
	            elem.style.width = width + '%'; 
	        }
	    }
}