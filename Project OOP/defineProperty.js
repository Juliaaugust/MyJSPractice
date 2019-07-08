var acc = {
	id: 66,
	name: "Stepa",
	age: 22,
	passHash: "fejj42343b234b3b423j32y"
};

Object.defineProperty( acc, 'passHash', {
	enumerable: false, 	  //возможность видеть данное свойство в цикле
	configurable: false, // возможность удалять свойство или переназначать ч/з defineProperty
	writable: false		// возможность перезаписывать
})


acc.passHash = 88;
delete passHash.name;

for (var i in acc) {
	console.log(acc[i])
}