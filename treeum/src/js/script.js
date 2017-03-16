$(function() {
	$(".search-btn").click(function() {
		$(".search-bar").addClass("visible animated slideInRight").toggle();

	});

	$(".search-btn").click(function() {
		if($(window).width() < 620){
			$(".logo").toggle();
			$(".menu-select").toggle();
			// $(".search").css("width", "100%");
		}
	})

	$('.error-block__title').mouseenter(function() {
		$(".error-block__title").addClass("animated bounceIn");
	});

	$('.footer-menu__links').click(function() {
		$('.footer-menu__links').removeClass('footer-menu__links--active')
		$(this).addClass('footer-menu__links footer-menu__links--active');
	});
})