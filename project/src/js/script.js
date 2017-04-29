// var links = document.querySelectorAll(".main-navigation__links");
// var activeLink = document.querySelector(".active-link");

// console.log(links)

// links.onclick = function(){
// 	alert(3)
// }


// $(function() {
// 	$(window).scroll(function() {
// 		var wintop = $(widnow).scrollTop(),
// 			 docheight = $('body').height(),
// 			 winheight = $(window).height();
// 			 console.log(wintop);
// 		var totalScroll = (wintop/(docheight-winheight))*100;
// 		console.log("total scroll " + totalScroll);
// 		$(".KW_progressBar").css("width", totalScroll+"%");	 
// 	});
// });

function updateProgress(num1, num2) {
	var percent = Math.ceil(num1 / num2 * 100) + "%";
	document.getElementById("progress").style.width = percent;
}

window.addEventListener("scroll", function() {
	var top = window.scrollY;
	var height = document.body.getBoundingClientRect().height - window.innerHeight;
	updateProgress(top, height);
})

