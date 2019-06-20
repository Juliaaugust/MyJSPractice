function Car(name) {
	this.name = name;
	this.speed = 0;

	this.engine = {
		v: 1.6,
		isTirnOn: false,
		horsesPower: 120
	}

	// this.start = function() {
	// 	this.isTirnOn = true;
	// 	this.speed += 10;
	// 	this.engine.isTirnOn = true;
	// }
}

// Car.prototype.speed = 1;

// Car.prototype.engine = {
// 	v: 1.6,
// 	isTirnOn: false,
// 	horsesPower: 120
// }

Car.prototype.start = function() {
	this.isTirnOn = true;
	this.speed = 10;
	this.engine.isTirnOn = true;
};

var mazda = new Car("Mazda");
console.log(mazda.engine.isTirnOn);
console.log(mazda.speed);
console.log(mazda.start());

var porshe = new Car("Porshe");
console.log(porshe.engine.isTirnOn);
console.log(porshe.speed);
console.log(porshe.start());
