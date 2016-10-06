$(function() {

	$('.nav__links').on('click', function(a) {
	$('.nav__links').removeClass('nav__links--active');
	$(this).addClass('nav__links nav__links--active');
	})

	$('#owl-carousel').owlCarousel({
		items: 1,
		autoPlay: true
	});


	var panels = $('.accordion__item').hide();

	panels.first().show();

	$('.accordion__title').on('click', function() {
		var $this = $(this);

		panels.slideUp();

		$this.next().slideDown();

		return false;
	})

	$('.accordion__title').on('click', function() {
		$('.accordion__title').removeClass('accordion__title--active');
		$(this).addClass('accordion__title accordion__title--active');
	})






})