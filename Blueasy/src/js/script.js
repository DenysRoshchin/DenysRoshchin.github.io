$(function() {
	$('.top__links').on('click', function(a) {
		$('.top__links').removeClass('top__active');
		$(this).addClass('top__links top__active');
		
	})
	$('.main--links').on('click', function(a) {
		$('.main--links').removeClass('main--active');
		$(this).addClass('main--links main--active');
		console.log('a')
	})
})