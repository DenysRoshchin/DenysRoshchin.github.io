$(function() {
	$(".search-btn").click(function() {
		$(".search-bar").addClass("visible animated slideInRight");	
	});

	$('.error-block__title').on("mouseenter", function() {
		$(".error-block__title").addClass("animated bounceIn");
	});

	$('.footer-menu__links').click(function() {
		$('.footer-menu__links').removeClass('footer-menu__links--active')
		$(this).addClass('footer-menu__links footer-menu__links--active');
	});
})