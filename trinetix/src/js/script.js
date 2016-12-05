$(function() {

	$('.nav__links').click(function() {
		console.log('e')
		$('.nav__links').removeClass('nav__links--active');
		$(this).addClass('nav__links nav__links--active');
	})

})