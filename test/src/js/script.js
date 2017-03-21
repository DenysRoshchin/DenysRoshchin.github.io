

var btn = document.getElementsByClassName("btn");
console.log(btn);

// btn.click(bige());

function bige() {
	// console.log(1)
	var the_node = document.getElementById("ul").lastChild;
	console.log(the_node);
	var the_clone = the_node.cloneNode(true);
	document.getElementById("ul").appendChild(the_clone);
}

