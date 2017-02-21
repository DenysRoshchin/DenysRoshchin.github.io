$(function() {
	$(".chart").click(function(){
		$("#mySidenav").css('width', '460px');
		$(".overlay").css('display', 'block');
	});
	$(".closebtn").click(function() {
		$("#mySidenav").css('width', '0px');
		$(".overlay").css('display', 'none');
	});
	$(".overlay").click(function() {
		$(this).css('display', 'none');
		$("#mySidenav").css('width', '0px');
	});
});

