// Code reuse pattern

 function Beverage(name, temp) {
 	this.name  = name;
 	this.temp = temp;
 }

 Beverage.prototype.drink = function() {
 	console.log('Hi, I am drinking ' + this.name + ' ' + this.type)
 }


function Coffee(type) {
	Beverage.call(this, 'coffee', 'hot')
	this.type = type;
}

Coffee.prototype = Object.create(Beverage.prototype)
Coffee.prototype.sip = function() {
	console.log('Dude, i am sipping awesome ' + this.name + ' ' + this.type)
}

var coffee = new Coffee('dark rust')
var water = new Beverage('water', 'cold')

coffee.sip()
water.drink()

