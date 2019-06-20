// МЕТОДЫ ОБЪЕКТА


// объект user не имеет методов

var user = {
	name: 'Julia',
	age: 21,
	email: 'julia@gmail.com'
};

// у объекта cat два метода: sayMeow и showInfo

var cat = {
	name: "Клюква",
	age: 2,
	owner: user, //в свойстве owner сохранили другой объект

	sayMeow: function (n) {
		for(var i=0; i<n; i++) {
			alert("Мяу!");
		}
	},

	showInfo: function () {
		return "Кличка: " + this.name + 
		"\nВозраст: " + this.age + 
		"\nИмя хозяина: " + this.owner.name;
	}
};

// вызовем методы объекта cat

cat.sayMeow(3); //кот будет мяукать 3 раза

alert(cat.showInfo());