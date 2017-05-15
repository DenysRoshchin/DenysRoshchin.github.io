// "use strict";

// function Player(name) {
// 	this.name = name || "anonymos";
// 	this.code = "<figure class='player'></figure>";
// 	this.$ = null;
// 	this.x = 0;
// 	this.y = 0;
// 	this.w = 0;
// 	this.h = 0;
// 	this.Initialize = (query) =>{
// 		query = query || "body";
// 		document.querySelector(query).innerHTML += this.code;
// 		this.$ = document.querySelector('.player');
// 		this.w = this.$.offsetWidth;
// 		this.h = this.$.offsetHeight;
// 		return this;
// 	};
// 	this.Move = (direction)=>{
// 		direction = direction || null;
// 		if(direction != null){
// 			if(direction === 'left' && this.x > 0){
// 				this.x -= 10;
					
// 			};
// 			if(direction === 'right' && (this.x + this.w) < window.innerWidth){
// 				this.x +=10;
				
// 			};
// 			if(direction === 'top' && this.y > 0){
// 				this.y -= 10;
				
// 			};
// 			if(direction === 'bottom' && (this.y + this.h) < window.innerHeight){
// 				this.y += 10;
				
// 			};
// 			this.$.setAttribute('style', 'left:'+this.x+'px; top:'+this.y+'px;' )
// 			console.log('this.x', this.x, 'this.y', this.y)
// 		}
// 	};
// 	return this;
// }
