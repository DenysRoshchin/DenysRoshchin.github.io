$(function() {

	$('.nav__links').on('click', function(a) {
	$('.nav__links').removeClass('nav__links--active');
	$(this).addClass('nav__links nav__links--active');
	})

})