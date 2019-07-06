// const alla = {
// 	name: 'Алла',
// 	surname: 'Гульцева',
// 	age: 22,

// 	sayHello () {
// 		console.log(`Привет! Меня зовут ${this.name} ${this.surname}. Мне ${this.age} года.`);
// 	}
// }

// const julia = {
// 	name: 'Юлия',
// 	surname: 'Гульцева',
// 	age: 22,

// 	sayHello () {
// 		console.log(`Привет! Меня зовут ${this.name} ${this.surname}. Мне ${this.age} года.`);
// 	}
// }

// julia.sayHello()
// alla.sayHello()




// sayHello.bind(julia)();
// sayHello.bind(alla)();

// function sayHello () {
// 	console.log(`Привет! Меня зовут ${this.name} ${this.surname}.`);
// }




// function getPerson(name, surname, age) {
// 	const preson = {
// 		name: name,
// 		surname: surname,
// 		age: age,

// 		sayHello () {
// 			console.log(`Привет! Меня зовут ${this.name} ${this.surname}. Мне ${this.age} года.`);
// 		}
// 	}

// 	return preson;
// }

// const alla = getPerson('Алла', 'Гульцева', 22);
// const julia = getPerson('Юлия', 'Гульцева', 22);
// julia.sayHello()
// alla.sayHello()





function Person(name, surname, age) {
	this.name = name,
	this.surname = surname,
	this.age = age,

	this.sayHello = () => {
		console.log(`Привет! Меня зовут ${this.name} ${this.surname}. Мне ${this.age} года.`);
	}
}

const alla = new Person('Алла', 'Гульцева', 22);
console.log(alla)

alla.sayHello()









