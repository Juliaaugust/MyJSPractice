console.clear();

// Доступные методы:
// getProducts – список продуктов, доступный в магазине для покупки

// clearBasket – очистка корзины
// getBasket

// addProductToBasket
// removeProductToBasket




// console.log('start');
// let basket = [];

// basket = Sync.getBasket();
// console.table(basket);

// const products = Sync.getProducts();
// console.table(products);

// basket = Sync.addProductToBasket(products[0]);
// console.table(basket);

// basket = Sync.addProductToBasket(products[1]);
// console.table(basket);

// console.log('finish');





// решили проблему блокирования потока выполнения программы,
// но код становится нечитабельным (callback hell) 

// console.log('start');

// Callback.getBasket(basket => {
// 	console.log(basket);

// 	Callback.getProducts(products => {
// 		console.table(products);

// 		Callback.addProductToBasket(products[0], basket => {
// 			console.table(basket);
// 		})
// 	})
// });

// console.log('finish');






// проблему вложенных Callback`ов сначала решали с помощью генераторов,
// потом появились промисы

// console.log('start');

// let basket = [];
// let products = [];

// ByPromise.getBasket()

// 	.then(_basket => {
// 		basket = _basket;
// 		console.log(basket);

// 		return ByPromise.getProducts();
// 	})

// 	.then(_products => {
// 		products = _products;
// 		console.table(products);

// 		return ByPromise.addProductToBasket(products[0]);
// 	})

// 	.then(_basket => {
// 		basket = _basket;
// 		console.table(basket);

// 		return ByPromise.addProductToBasket(products[1]);
// 		// throw Error('some error');
// 	})

// 	.then(_basket => {
// 		basket = _basket;
// 		console.table(basket);

// 		return ByPromise.addProductToBasket(products[0]);
// 	})

// 	.then(_basket => {
// 		basket = _basket;
// 		console.table(basket);

// 		return 5; // не обязательно возвращать Promise (then все равно вернет Promise, на который можно дальше повесть then)
// 	})

// 	.then(value => {
// 		console.table(value);
// 	})

// 	.catch(err => {
// 		console.error(err);
// 	})

// console.log('finish');

// const a = [1, 2, 3];
// const b = [3, 4, 5, 6];

// const c = [...a, ...b];

// console.log(c);







// еще лучший подход: async / await

console.log('start');

main();

console.log('finish');

async function main() {
	try {
		let basket = await ByPromise.getBasket();
		console.log(basket);

		const products = await ByPromise.getProducts();
		console.table(products);

		throw Error('some error');

		await Promise.all([
			ByPromise.addProductToBasket(products[0]),
			ByPromise.addProductToBasket(products[2]),
			ByPromise.addProductToBasket(products[0]),
			ByPromise.addProductToBasket(products[1])
		])

		basket = await ByPromise.getBasket();
		console.table(basket);
	} catch (err) {
		console.error(err);
	}
}











