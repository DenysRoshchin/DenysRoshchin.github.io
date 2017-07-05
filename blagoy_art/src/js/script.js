$(function() {

	$('.slider').slick({
		dots: true,
		// autoplay: true
		responsive: [
    {
      breakpoint: 450,
      settings: {
        dots: false,
      }
    },
  ]
	});

	$('.open-catalog').click(function() {
		$('.catalog').toggleClass('visible');
	});

	$('.open-nav').click(function() {
		$('.main-nav').toggle();
	});

	$('.close-btn').click(function() {
		console.log(32)
		$('.main-nav').toggle();	
	});

});