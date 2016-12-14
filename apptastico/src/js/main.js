$(function() {
	
	$(window).scroll(function() {
    if ($("body").offset().top > 50) {
        $(".header-main").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
  });

	$('.slick').slick({
		dots: false,
		slidesToShow: 4,
    infinite: true,
    leftArrow: true,
    rightArrow: true,

      autoplay: true,
  autoplaySpeed: 2000,
	});

	$('a.page-scroll').on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
       event.preventDefault();
    });

});