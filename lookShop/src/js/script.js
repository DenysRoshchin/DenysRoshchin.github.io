$(function() {
	$('.owl-carousel').owlCarousel({
		items : 1,
		nav : true,
		navigationText : false,
		loop : true,
		// autoplay : true
	});
	
	$('.owl-carousel2').owlCarousel({
		items : 6,
		center : true,
		loop : true,
		pagination : false,
		nav : true
		// autoplay : true
	})

	$('.slider2__items').click(function(event) {
		event.preventDefault();
		$('.slider2__items').removeClass('slider2__items--active')
		$(this).addClass('slider2__items slider2__items--active')
	})

})