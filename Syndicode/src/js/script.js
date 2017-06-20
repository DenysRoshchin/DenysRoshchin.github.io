$(document).ready(function(){
  $('.slider').slick({
    dots: true
  });
  
  $('.main-nav__links').click( function() {
  	$('.main-nav__links').removeClass('active');
  	$(this).addClass('active');
  });

  $('.humbicon').click(function() {
  	$('.main-nav').toggleClass('main-nav-active');
  });

  $('.main-nav').click(function() {
  	if($('.main-nav').hasClass('main-nav-active')){
  		$('.main-nav').removeClass('main-nav-active');
  	}
  });
 
});

