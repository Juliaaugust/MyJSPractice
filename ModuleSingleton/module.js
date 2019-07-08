
// модуль – объект, в котором заключены его состояния, функционал, интерфейс
// используем замыкания: самовызывающуюся ф-ю, чтобы замкнуть приватные данные и вернуть сам объект
const BasketModule = (function () {

	// приватные данные
	let products = [];
	let sum = 0;

	// публичный интерфейс
	return {
		addProduct: function(product) {
			sum += product.price;
			products.push(product);
		},
		printProducts: function() {
			for (let i in products) {
				console.log(`Продукт ${products[i].name}: ${products[i].price} рублей`);
			}
		}
	}

}());

class Product {
	constructor (name, price) {
		this.name = name;
		this.price = price;
	}
}

class Food extends Product {
	constructor (name, price, calories) {
		super(name, price);
		this.calories = calories;
	}
}

const shirt = new Product('Рубашка', 1200);
const cookie = new Food('Печенье', 70, 400)

BasketModule.addProduct(shirt);
BasketModule.addProduct(cookie);

BasketModule.printProducts();

