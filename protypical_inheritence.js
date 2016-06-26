var human = {
	species : "human",
	saySpecies : function(){
		console.log("Hi i am human");
	},
	sayName :  function(){
		console.log("Hi my name is " + this.name);
	},
	create : function (values) {
		var instance = Object.create(this);
		Object.keys(values).forEach(function(key){
			instance[key] = values[key];
		});
		return instance;
	}
}


var subham = Object.create(human);
subham.name = "Subham Tripathi"
subham.saySpecies();

musician = human.create({name : "Sunil Tripathi", species : "musician", age : 22});
