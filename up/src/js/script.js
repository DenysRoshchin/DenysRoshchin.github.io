$(function() {

	$('.main-nav__links').click(function() {
		$('.main-nav__links').removeClass('main-nav__links--active');
		$(this).addClass(' main-nav__links--active');
	});

	$('.open-menu').click(function() {
		$('.main-nav').toggle();
	});

	$('.customize-select').chosen({
		disable_search: true,
	});


	$('.slider').slick({
		slidesToShow: 4,
		  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 416,
      settings: {
        slidesToShow: 1
      }
    }
  ]
	});

});

