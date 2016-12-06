$(function() {
	
	$('.header-menu__links').click(function() {
		$('.header-menu__links').removeClass('header-menu__links_active')
		$(this).addClass('header-menu__links_active')
	})

	$('.btn-green').click(function() {
		$('.btn-green').removeClass('btn-active')
		$(this).addClass('btn-green btn-active')
		console.log('e')
	})

	$('#carousel-generic').carousel();

})