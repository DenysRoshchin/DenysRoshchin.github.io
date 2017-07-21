$(function() {
	$('.about-prog__open').click(function() {
		$('.program').css('width', '100%');
		$('.program__links').css('opacity', '1');
		$('.closebtn').css('opacity', '1');
	});
	$('.closebtn').click(function() {
		$('.program').css('width', '0%');
		$('.program__links').css('opacity', '0');
		$('.closebtn').css('opacity', '0');
	});
	$('.slider').slick({
		dots: true
	});
});