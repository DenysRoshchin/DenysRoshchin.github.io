$(function() {
	$('.slider-top').slick({

	});
	
	$('.slider-work').slick({

	});
});

var names = ['Bart', 'Lisa', 'Meggi', 'Homer', 'Marge'];

function list(names){
  var newName = names.join(' ');
  console.log(typeof newName);
  console.log(newName);
  console.log(newName.substring(newName.length - 5));
 

}

list(names);