//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  //code here
var Person = function(name, age) {
	this.name = name;
	this.age = age; 
}

//Now create three instances of Person with data you make up

  //code here
 var steve = new Person('Steve', 26);
 var devin = new Person('Devin', 27);
 var alex = new Person('Alex', 25);


//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  //code here

Person.prototype.sayName = function() {
	alert(this.name);
}
steve.sayName()
devin.sayName()
alex.sayName()