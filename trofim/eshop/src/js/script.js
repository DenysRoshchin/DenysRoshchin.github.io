"use strict";

(()=>{
	
	document.addEventListener('DOMContentLoaded', setup, false);
	
	function setup() {
		let alpha = new ModuleWatcher();
		alpha.run();
		console.log();
	};

	function ModuleWatcher(){
		this.$ = document.querySelectorAll('.main') || document.querySelectorAll('.module') || null;
		if(!null){
			this.main =  {
				
			};
			this.run = () => {
				document.onclick = (event) => {
					let el = event.target,
						elId = '';
					if(el.classList.contains('btn')){
						event.preventDefault();
						elId = el.parentNode.parentNode.parentNode.id;
						console.log(el);
					};
					if(el.classList.contains('link')){
						event.preventDefault();
						elId = el.parentNode.parentNode.parentNode.id;
						console.log(el);
					}
					console.log(elId);
					return false;
				}
			};
			return this; 
		}
		return false;
	}


})();