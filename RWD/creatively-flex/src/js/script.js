// $(function() {
// 	$('.slider-top').slick({

// 	});
	
// 	$('.slider-work').slick({

// 	});
// });

var randomInt = function () {
    return Math.floor(Math.random() * (100 - 1) + 1);
  };

    var box1 = {
      height: randomInt(),
      width: randomInt(),
      length: randomInt()
    };

    var box2 = {
      height: randomInt(),
      width: randomInt(),
      length: randomInt()
    };

    var box3 = {
      height: randomInt(),
      width: randomInt(),
      length: randomInt()
    };

    var volume = function(obj) {
     	return this.height * this.width * this.length;
    };

    console.log(volume(box3));
    console.log(volume(box2));
    

