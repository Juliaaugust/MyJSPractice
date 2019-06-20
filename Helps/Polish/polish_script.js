var btn = document.getElementsByTagName("button")[0];
var res = document.getElementById("res");
var polish = document.getElementById("polish");
var expr = document.getElementById("expr");

btn.onclick = function() {
	
	polish.innerHTML = "Польская запись: " + toPolish(expr.value);
	// res.innerHTML = "Результат: " + getResPolish(polish.value);
}

// var oper_1 = ["(", ")"];
// var oper_2 = ["+", "-"];
// var oper_3 = ["*", "/"];

var operators = {
	"*": 3,
	"/": 3,
	"+": 2,
	"-": 2,
	"(": 1,
	")": 1
}
    

function toPolish(expr) {
    var stack = [];
    var res = "";

    
   	expr.split(" ").forEach(function (token) {
		if (token in operators) {

			// если у нас знак операции (а не скобка)
			if(operators[token] != 1) {

				// если стек пуст или находящиеся в нем символы имеют меньший приоритет,
				// чем приоритет текущего символа, то помещаем текущий символ в стек
				if (stack.length == 0 || operators[stack[stack.length-1]] < operators[token]) {
			    	stack.push(token);

			    	// если символ, находящийся на вершине стека имеет приоритет, больший или равный приоритету текущего символа, 
			    	//то извлекаем символы из стека в выходную строку до тех пор, пока выполняется это условие
			    } else if (operators[stack[stack.length-1]] >= operators[token]) {
			    	while (stack.length != 0 || operators[stack[stack.length-1]] >= operators[token]) {
			    		res += stack.pop();
			    	}
			    	stack.push(token);
			    }

			    // если текущий символ - открывающая скобка, то помещаем ее в стек
			} else if(token == "(") {
				stack.push(token);

				// если текущий символ - закрывающая скобка, то извлекаем символы из стека в выходную строку, 
				// пока не встретим в стеке открывающую скобку. Скобки уничтожаем
			} else if(token == ")") {
				while (stack[stack.length-1] != "(") {
					res += stack.pop();
				}
				stack.pop();
			}
		    
		    // иначе (если число или оператор)
	  	} else {
	    	res += token;
	  	}
	});

   	// если вся входная строка разобрана, а в стеке еще остаются знаки операций, извлекаем их из стека в выходную строку
	if (stack.length > 0) {
		while (stack.length != 0) {
			res += stack.pop();
		}
	}

    return res;
};