const input = document.getElementById('input');
const ulElem = document.getElementById('list');
const actionPanelGroup = document.getElementById('actionPanelGroup');
const selectAllBtn = document.getElementById('selectAllBtn');
const resetBtn = document.getElementById('resetBtn');

actionPanelGroup.style.display = 'none';
selectAllBtn.style.display = 'none';
resetBtn.style.display = 'none';

let todoList = [];

input.addEventListener('keydown', event => {
	if ((event.key === "Enter" || event.keyCode === 13) && (input.value)) {
		todoList.unshift({
			content: input.value,
			done: false,
			select: false
		});
		input.value = '';
		
		upgradeView();
	}
})

function upgradeView() {
	ulElem.innerHTML = ''; // очищаем список

	for (const index in todoList) {
		const todoItem = todoList[index];

		const liElem = document.createElement('li');
		liElem.className = 'list-group-item';
		ulElem.append(liElem);

		const divElem = document.createElement('div');
		divElem.className = 'form-group form-check';
		liElem.append(divElem);

		const checkElem = document.createElement('input');
		checkElem.type = 'checkbox';
		checkElem.className = 'form-check-input';
		checkElem.id = 'todoItem' + index;
		checkElem.checked = todoItem.select;
		checkElem.addEventListener('change', () => {
			todoItem.select = checkElem.checked;
			upgradeView();
		})

		const lableElem = document.createElement('label');
		lableElem.className = 'form-check-label ml-2';
		if (todoItem.done) {
			lableElem.className += ' todoDone';
		}
		lableElem.setAttribute('for', 'todoItem' + index);
		lableElem.innerText = todoItem.content;

		const removeBtn = document.createElement('button');
		removeBtn.type = 'button';
		removeBtn.className = 'btn btn-outline-danger ml-2';
		removeBtn.innerText = 'Remove';
		removeBtn.style = 'float:right';

		if (!todoItem.done) {
			const doneBtn = document.createElement('button');
			doneBtn.type = 'button';
			doneBtn.className = 'btn btn-outline-success ml-2';
			doneBtn.innerText = 'Done';
			doneBtn.style = 'float:right';

			divElem.append(doneBtn);

			doneBtn.addEventListener('click', () => {
				todoItem.done = !todoItem.done;
				upgradeView();
			})
		} else {
			const restoreBtn = document.createElement('button');
			restoreBtn.type = 'button';
			restoreBtn.className = 'btn btn-outline-info ml-2';
			restoreBtn.innerText = 'Restore';
			restoreBtn.style = 'float:right';

			divElem.append(restoreBtn);

			restoreBtn.addEventListener('click', () => {
				todoItem.done = false;
				upgradeView();
			})
		}

		divElem.append(checkElem);
		divElem.append(lableElem);
		divElem.append(removeBtn);

		removeBtn.addEventListener('click', () => {
			todoList.splice(todoList.indexOf(todoItem), 1);
			upgradeView();

			// второй способ:
			// todoList = todoList.filter(currTodoItem => currTodoItem !== todoItem)
			// upgradeView();
		})
	}
	// выбран (галочкой) хотя бы один элемент списка
	const isSomeSelectedElem = todoList.some(todoItem => todoItem.select);
	if (isSomeSelectedElem) {
		actionPanelGroup.style.display = 'block';
		resetBtn.style.display = 'inline-block';
	} else {
		actionPanelGroup.style.display = 'none';
		resetBtn.style.display = 'none';
	}

	// если в списке что-то есть и все его элементы не выбраны
	const isEverySelectedElem = todoList.every(todoItem => todoItem.select);
	if (todoList.length && !isEverySelectedElem) {
		selectAllBtn.style.display = 'inline-block';
	} else {
		selectAllBtn.style.display = 'none';
	}
}

document.getElementById('doAction').addEventListener('click', () => {
	for (const todoItem of todoList) {
		if (todoItem.select) {
			todoItem.done = true;
			todoItem.select = false;
		}
	}
	upgradeView();
})
document.getElementById('restoreAction').addEventListener('click', () => {
	for (const todoItem of todoList) {
		if (todoItem.select) {
			todoItem.done = false;
			todoItem.select = false;
		}
	}
	upgradeView();
})
document.getElementById('removeAction').addEventListener('click', () => {
	todoList = todoList.filter(todoItem => !todoItem.select);

	// второй способ:
	// for (const todoItem of todoList) {
	// 	if (todoItem.select) {
	// 		todoList.splice(todoList.indexOf(todoItem), 1)
	// 	}
	// }

	upgradeView();
})

selectAllBtn.addEventListener('click', () => {
	const checkboxList = document.getElementsByClassName('form-check-input');
	
	for (const index in todoList) {
		todoList[index].select = true;
		checkboxList[index].checked = true;
	}
	upgradeView();
})

resetBtn.addEventListener('click', () => {
	const checkboxList = document.getElementsByClassName('form-check-input');
	
	for (const index in todoList) {
		todoList[index].select = false;
		checkboxList[index].checked = false;
	}
	upgradeView();
})








