$(function() {
	$('.slick').slick({
		dots: false,
		slidesToShow: 4,
		centerMode: true,
		centerPadding: 60,
		responsive: [
			{
				breakpoint:1200 {
					slidesToShow: 3,
				}
			}
		]
	});

	 $('a.page-scroll').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});