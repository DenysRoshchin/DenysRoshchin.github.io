/* Set the width of the side navigation to 250px */

function openNav() {
    document.getElementById("mySidenav").style.width = "460px";
}


 Set the width of the side navigation to 0 
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


// WHY DIDNT WORK HOW TO MAKE TRIGGER WITH JQ?

$(function() {
	$("#chart").click(function(){
		$("#mySidenav").css('width', '460px');
		console.log('s');
	});
	$("body").click(function() {
		$("#mySidenav").css('width', '0px');
	});
});

