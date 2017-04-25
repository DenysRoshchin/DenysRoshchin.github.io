function senc() {
	var all = '';
	var i;
	for(i = 0; i < arguments.length; i++){
		all += arguments[i];
	}
	return all;
};



var box = document.getElementById("box");
var reqID;
var dir;

function changeDir(d) {
	dir = d;
	// console.log(dir);
	// return dir; 
};

function startAnimation() {
	if(dir == "left"){
		box.style.left = (box.offsetLeft += 1) + "px";
		console.log('left work')
	} else if(dir == "right"){
		box.style.left = (box.offsetLeft -= 1) + "px";
		console.log('right work')
	}
	reqID = window.requestAnimationFrame(startAnimation);
};

function stopAnimation() {
	window.cancelAnimationFrame(reqID);
}

// box.style.left = (box.offset += 1) + "px";
