var parsedData = {
    "test3": {
        "1": "#9a4343",
        "3": "#a98181",
        "5": "#b52b2b",
        "7": "#907c7c"
    },
    "test1": {
        "test2": {
            "test5": {
                "2": "#774c4c",
                "4": "#cc9999"
            },
            "test9991": {
                "test3": {
                    "1": "#9a4343",
                    "3": "#a98181",
                    "5": "#b52b2b",
                    "7": "#907c7c"
                },
                "test1": {
                    "test2": {
                        "test5": {
                            "2": "#774c4c",
                            "4": "#cc9999"
                        }
                    },
                    "test4": {
                        "6": "#385f82",
                        "8": "#9a5a5a"
                    },
                    "test3": {
                        "1": "#9a4343",
                        "3": "#a98181",
                        "5": "#b52b2b",
                        "7": "#907c7c"
                    },
                    "test1": {
                        "test2": {
                            "test5": {
                                "2": "#774c4c",
                                "4": "#cc9999"
                            }
                        },
                        "test4": {
                            "6": "#385f82",
                            "8": "#9a5a5a"
                        },
                    }
                }
            }
        },
        "test4": {
            "6": "#385f82",
            "8": "#9a5a5a"
        },
        "test3": {
            "1": "#9a4343",
            "3": "#a98181",
            "5": "#b52b2b",
            "7": "#907c7c"
        },
        "test1": {
            "test2": {
                "test5": {
                    "2": "#774c4c",
                    "4": "#cc9999"
                }
            },
            "test4": {
                "6": "#385f82",
                "8": "#9a5a5a"
            },
        }
    }
};

var resultArr = [];

var initialise = function(obj){
	var keys = Object.keys(obj);
	
	var pusher = function(obj){
		var currentKeys = Object.keys(obj);
		var val = currentKeys[0];

		if(isNaN(Number(val))){
			var l = currentKeys.length;
			for(var i = 0; i < l; i++){
				pusher(obj[currentKeys[i]]);
			}
		} else if(typeof Number(val) === 'number') {
			resultArr.push(obj);
		}
	};
	
	for(var i = 0; i < keys.length; i++){
		pusher(obj[keys[i]]);
	}
};

initialise(parsedData);

console.log(resultArr);

var keys = [];
var property = [];


function makeUl(arr) {
	
	var ul = document.createElement('ul');

	for(var i = 0; i < arr.length; i++){
	
		for(prop in arr[i]){
			var li =document.createElement('li');

			li.style.background = arr[i][prop];
			ul.appendChild(li);
		}
			keys.push(Object.keys(resultArr));
			li.style.border.width;
			
	}


	var parent = document.getElementById('js');
	parent.appendChild(ul);

	return ul;
}

console.log(makeUl(resultArr));































// var key = [];
// // var property = [];

// var parent = document.getElementById('js');
// var ul = document.createElement("ul");
// var li = document.createElement("li");
// parent.appendChild(ul);



// for(var i = 0; i < resultArr.length; i++){
	
// 	for(prop in resultArr[i]){
// 		prop = ul.appendChild(li);
// 	}
// 		// key.push(Object.keys(resultArr[i]));

// }









