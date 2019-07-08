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





// function Person(name, surname, age) {
// 	this.name = name
// 	this.surname = surname
// 	this.age = age

// 	// this.sayHello = () => {
// 	// 	console.log(`Привет! Меня зовут ${this.name} ${this.surname}. Мне ${this.age} года.`);
// 	// }

// 	Person.count += 1 // подсчитываем количество персон
// }

// // статические свойства и методы – принадлежат не контексту this (не экземпляру класса), а самому классу
// Person.count = 0;

// Person.prototype.sayHello = function () {
// 	console.log(`Привет! Меня зовут ${this.name} ${this.surname}. Мне ${this.age} года.`);
// }

// const alla = new Person('Алла', 'Гульцева', 22);
// const julia = new Person('Юлия', 'Гульцева', 22);

// const person3 = new Person('name', 'surname', 18);

// console.log(alla)
// console.log(julia)

// alla.sayHello()

// console.log('Количество персон: ' + Person.count)





// новый формат – синтаксический сахар

class Person {
	constructor (name, surname, age) {
		this.name = name
		this.surname = surname
		this.age = age

		Person.count += 1
	}

	get fullName () {
		return `${this.name} ${this.surname}`
	}

	set fullName (val) {
		const namesArr = val.split(' ')

		this.name = namesArr[0]
		this.surname = namesArr[1]

		return val
	}

	sayHello () {
		console.log(`Привет! Меня зовут ${this.name} ${this.surname}. Мне ${this.age} года.`);
	}

	// статические методы
	static howMuch () {
		console.log('Создано пользователей: ' + Person.count)
	}
}

Person.count = 0; // статические свойства

const alla = new Person('Алла', 'Гульцева', 22);
const julia = new Person('Юля', 'Гульцева', 22);

console.log(alla)

console.log(julia.fullName)
julia.sayHello()

julia.fullName = 'Юлия Гульцева'
console.log(julia.fullName)
julia.sayHello()















