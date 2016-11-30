$(function() {

	$('.menu__links').click(function() {
		console.log('e')
		$('.menu__links').removeClass('menu__links--active')
		$(this).addClass('menu__links menu__links--active')
	})

})