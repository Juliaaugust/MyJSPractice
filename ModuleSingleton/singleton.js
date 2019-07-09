const CounterModule = (function () {

	let counter = 0,
		instance;

	const getCounter = () => counter;

	const increaseCounter = () => counter ++;

	const createInstance = () => {
		return {
			getCounter: getCounter,
			increaseCounter: increaseCounter
		}
	}
	
	return {
		getInstance: () => {
			// если экземпляр класса создан, возвращаем его. Иначе – создаем экземпляр класса
			return instance || (instance = createInstance());
		}
	}
}());

// console.log(CounterModule.getInstance());

const c1 = CounterModule.getInstance();
const c2 = CounterModule.getInstance();

console.log(c1 === c2); // true

c1.increaseCounter();
c2.increaseCounter();
c1.increaseCounter();
c2.increaseCounter();
console.log(CounterModule.getInstance().getCounter()); // 4
