function Hello() { 
	var name; 
	this.setName = function(Name) { 
		name = Name; 
	}; 
	this.sayHello = function() { 
		console.log('Hello，你好 ' + name); 
	}; 
}; 
module.exports = Hello;
