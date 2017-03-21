$(function() {
	$(window).scroll(function() {
		
		var pos = $(this).scrollTop();
		var about = $("#about").position();
		var aboutHeight = $("#about").height();
		console.log(pos)
		if(pos >= (about.top - aboutHeight + 50)){
			$(".about-items").addClass("animated bounceInDown");
		} else{
			$(".about-items").removeClass("animated bounceInDown");
		}

	})
})








var Person =  {
	constructor: function(name, age, gender) {
		this.name = name;
		this.age = age;
		this.gender = gender;
		return this;
	},
	greet: function() {
		return "Hello my name is " + this.name;
	}
};

var person, anotherPerson, thirdPerson;

person = Object.create(Person).constructor("Jack", 24, "male");
anotherPerson = Object.create(Person).constructor("Jess", 21, "female");
thirdPerson = Object.create(Person).constructor("Bill", 11, "male");

console.log(person.name);
console.log(anotherPerson.age);
console.log(thirdPerson.gender);


var WebDev = Object.create(Person);
WebDev.constructor = function(name, age, gender, skills) {
	Person.constructor.apply(this, arguments);
	this.skills = skills;
	return this;
}

WebDev.constructor("Bob", 13, "male", ['html', 'css', 'js']);
console.log(WebDev.skills);

var developer = Object.create(WebDev);
developer.constructor("Bob", 13, "male", ['html', 'css', 'js']);

console.log(developer.skills)





