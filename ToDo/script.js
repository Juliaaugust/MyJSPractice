const selectAllBtn = document.getElementById('selectAllBtn');
const input = document.getElementById('input');
const ulElem = document.getElementById('list');

const todoList = ['item1', 'item2', 'item3'];

input.addEventListener('keydown', event => {
	if(event.key === "Enter" || event.keyCode === 13){
		todoList.push(input.value);
		input.value = '';
		
		upgradeView();
	}
})

selectAllBtn.addEventListener('click', () => {
	console.log("selectAllBtn is clicked!");
})

function upgradeView() {
	const liElem = document.createElement('li');
	liElem.className = 'list-group-item';
	ulElem.append(liElem);

	const divElem = document.createElement('div');
	divElem.className = 'form-group form-check';
	liElem.append(divElem);

	const checkElem = document.createElement('input');
	checkElem.type = 'checkbox';
	checkElem.className = 'orm-check-input';

	const lableElem = document.createElement('label');
	lableElem.className = 'form-check-label ml-2';
	lableElem.setAttribute = ('for', 'exampleCheck1');
	lableElem.innerText = todoList[0];

	const removeBtn = document.createElement('button');
	removeBtn.type = 'button';
	removeBtn.className = 'btn btn-outline-danger ml-2';
	removeBtn.innerText = 'Remove';
	removeBtn.setAttribute('style', 'float:right');

	const doneBtn = document.createElement('button');
	doneBtn.type = 'button';
	doneBtn.className = 'btn btn-outline-success ml-2';
	doneBtn.innerText = 'Done';
	doneBtn.setAttribute('style', 'float:right');

	divElem.append(checkElem);
	divElem.append(lableElem);
	divElem.append(doneBtn);
	divElem.append(removeBtn);
}



