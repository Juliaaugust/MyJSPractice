// наследование 

class Animal {
	constructor(name) {
		this.name = name
		this.sound = ''
	}

	voice () {
		return `Животное ${this.name} говорит: "${this.sound}"`
	}

	returnType () {
		return `Я говорю "${this.sound}", значит я ${this.type}`
	}
}

// const bird = new Animal('Чижык')
// bird.sound = 'Чирик'
// console.log(bird.voice())

class Cat extends Animal {
	constructor(name) {
		super(name)
		this.sound = 'Мяу'
		this.type = 'Кошка'
	}

	// returnType () {
	// 	return `Я говорю "${this.sound}", значит я ${this.type}`
	// }
}

class Dog extends Animal {
	constructor(name) {
		super(name)
		this.sound = 'Гав'
		this.type = 'Собака'
	}
}

const catMurka = new Cat('Мурка')
const dogTuzik = new Dog('Тузик')

console.log(catMurka.voice())
console.log(catMurka.returnType())

console.log(dogTuzik.voice())
console.log(dogTuzik.returnType())




























