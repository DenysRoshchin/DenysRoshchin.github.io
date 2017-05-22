var modal = document.getElementById('id01');
document.querySelector('.login__btn').onclick = function() {
	modal.style.display = "block";
}

window.onclick = function() {
	if(event.target == modal){
		modal.style.display = "none";
	}
}

document.querySelector('.close').onclick = function() {
	modal.style.display='none';
}

