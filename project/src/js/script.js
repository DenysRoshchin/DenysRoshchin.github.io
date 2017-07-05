
var confirmBtn = document.querySelector('.form-field__confirm');
var btn = document.querySelector('.btn');


confirmBtn.onclick = function() {
	
	var inpSum, inpTerm, inpInn, arr, compareArr;
	
	document.querySelector('.confirm-field').className +=' visible';
	
	inpSum = document.getElementById('sum').value;
	inpTerm = document.getElementById('term').value;
	inpInn = document.getElementById('inn').value;
	arr = [];
	
	for (var i = 0; i < inpInn.length; i++){
		arr.push(inpInn[i]);
	}
	
	compareArr = arr.splice(0, 5);

	if(inpInn.length < 10 || inpInn.length > 10){
		alert('Your inn must contein 10 digits');
	} else if(compareArr.join('') < 33000){
		alert('You to yang');
		document.querySelector('.confirm-field').innerHTML = '<button class="red">You cant submit, to young</button>';
	} else if(compareArr.join('') > 33000){
		document.querySelector('.sum').innerHTML = '<span>Sum: </span>' + inpSum + '<br>';
		document.querySelector('.term').innerHTML += '<span>Term: </span>' + inpTerm + '<br>';
		document.querySelector('.confirm-field').innerHTML += '<button class="green">Submit</button>';
	} 

};


jQuery(function () {

 	jQuery("#f_elem_city").autocomplete({
		source: function (request, response) {
		 jQuery.getJSON(
			"http://gd.geobytes.com/AutoCompleteCity?callback=?&q="+request.term,
			function (data) {
			 response(data);
			}
		 );
		},
		minLength: 3,
		select: function (event, ui) {
		 var selectedObj = ui.item;
		 jQuery("#f_elem_city").val(selectedObj.value);
		getcitydetails(selectedObj.value);
		 return false;
		},
		open: function () {
		 jQuery(this).removeClass("ui-corner-all").addClass("ui-corner-top");
		},
		close: function () {
		 jQuery(this).removeClass("ui-corner-top").addClass("ui-corner-all");
		}
	 });
	 jQuery("#f_elem_city").autocomplete("option", "delay", 100);
	});




