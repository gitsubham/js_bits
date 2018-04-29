// Code reuse pattern
// source - https://www.youtube.com/watch?v=fTNb4yo3S3c&list=PLrzrNeNx3kNHsaPfrpPo0AlW-MhJE6gOA&index=14

function Person(name) {
	this.name = name
}

function Dog(name) {
	this.name = name
}

var speaker = {
	speak: function() {
		console.log(this.name + ' is speaking.')
	}
}

var mover = {
	walk: function() {
		console.log(this.name + ' is walking.')
	},
	move: function() {
		console.log(this.name + ' is moving.')
	},
}

function extend(target) {
	if (!arguments[1]) {
		return ;
	}

	for (var ii = 1, ll = arguments.length; ii < ll; ii++) {
		var source = arguments[ii]

		for (var prop in source) {
			if (!target[prop] && source.hasOwnProperty(prop)) {
				target[prop] = source[prop];
			}
		}
	}
}

extend(Person.prototype, speaker, mover )
extend(Dog.prototype, speaker)

var johnDoe = new Person('john')
var fido = new Dog('fido')
