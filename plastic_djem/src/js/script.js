// You have an array of integers (for example [1, 2, [3, 4, [5, 6], 7], 8, [9, 10]]).
// Find the sum of all array’s elements using JS. 
// Note, the array’s nesting level can be random. 

// var arr = [[2,[3]], 1, [[1],[1],[1]],2, [3, 4, [5, 6], 7], 8, [9, 10]];

// var flatten = arr => arr.reduce(
//   (a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []
// );

// var concatArr = flatten(arr);

// function arraySum(arr) {
// 	var summ = 0;
// 	for(var i = 0; i < arr.length; i++){
// 		summ += arr[i];
// 	}
// 	return summ;	
// }

// console.log("Sum of all array's elements: " + arraySum(concatArr));







var numberElem = document.getElementById("number");
var factorization0Text = document.createTextNode("");
document.getElementById("factorization0").appendChild(factorization0Text);
var lastInput = "";
document.getElementById("random").onclick = function() {
	document.getElementById('number').value = Math.floor(Math.pow(1000, Math.random()) * 10).toString(); factor();
}

function factor() {
	var numberText = numberElem.value;
	if (numberText == lastInput)
		return;
	lastInput = numberText;
	
	factorization0Text.data = "";
	
	var outElem1 = document.getElementById("factorization1");
	clearChildren(outElem1);
	outElem1.appendChild(document.createTextNode(NBSP));
	var temp = document.createElement("sup");
	temp.appendChild(document.createTextNode(NBSP));
	outElem1.appendChild(temp);
	
	if (!/^-?\d+$/.test(numberText)) {
		factorization0Text.data = "Not an integer";
		return;
	}
	
	function appendText(str) {
		outElem1.appendChild(document.createTextNode(str));
	}
	
	var n = parseInt(numberText, 10);
	if (n < 2) {
		factorization0Text.data = "Number out of range (< 2)";
	} else if (n >= 9007199254740992) {
		factorization0Text.data = "Number too large";
	} else {
		var factors = primeFactorList(n);
		var factorPowers = toFactorPowerList(factors);
		
		factorization0Text.data = n + " = " + factors.join(" " + TIMES + " ");
		
		if (factorPowers.length < factors.length) {
			clearChildren(outElem1);
			
			appendText(n + " = ");
			factorPowers.forEach(function(factPow, i) {
				if (i != 0)
					appendText(" " + TIMES + " ");
				
				appendText(factPow[0].toString());
				if (factPow[1] > 1) {
					var temp = document.createElement("sup");
					temp.appendChild(document.createTextNode(factPow[1].toString()));
					outElem1.appendChild(temp);
				}
			});
		}
	}
}

function primeFactorList(n) {
	if (n < 1)
		throw "Argument error";
	var result = [];
	while (n != 1) {
		var factor = smallestFactor(n);
		result.push(factor);
		n /= factor;
	}
	return result;
}

function smallestFactor(n) {
	if (n < 2)
		throw "Argument error";
	if (n % 2 == 0)
		return 2;
	var end = Math.floor(Math.sqrt(n));
	for (var i = 3; i <= end; i += 2) {
		if (n % i == 0)
			return i;
	}
	return n;
}

function toFactorPowerList(factors) {
	var result = [];
	var prevFactor = factors[0];
	var count = 1;
	for (var i = 1; i < factors.length; i++) {
		if (factors[i] == prevFactor) {
			count++;
		} else {
			result.push([prevFactor, count]);
			prevFactor = factors[i];
			count = 1;
		}
	}
	result.push([prevFactor, count]);
	return result;
}


function clearChildren(node) {
	while (node.firstChild != null)
		node.removeChild(node.firstChild);
}


var TIMES = "\u00D7"; 
var NBSP  = "\u00A0";

