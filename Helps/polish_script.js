var btn = document.getElementsByTagName("button")[0];
var res = document.getElementById("res");
var polish = document.getElementById("polish");
var expr = document.getElementById("expr");

btn.onclick = function() {

	var polish_str = "";
	toPolish(expr.value).forEach(function (token) {
		polish_str = polish_str + " " + token;
	});
	polish.innerHTML = "Польская запись: " + polish_str;
	
	res.innerHTML = "Результат: " + getResPolish(toPolish(expr.value));
}

function toPolish(expr) {
	var operators = {
		"*": 3,
		"/": 3,
		"+": 2,
		"-": 2,
		"(": 1,
		")": 1
	};

    var stack = [];
    var res = [];

    
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
			    		res.push(stack.pop());
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
					res.push(stack.pop());
				}
				stack.pop();
			}
		    
		    // иначе (если число или оператор)
	  	} else {
	    	res.push(token);
	  	}
	});

   	// если вся входная строка разобрана, а в стеке еще остаются знаки операций, извлекаем их из стека в выходную строку
	if (stack.length > 0) {
		while (stack.length != 0) {
			res.push(stack.pop());
		}
	}

    return res;
};

function getResPolish(polish) {
	var operators = {
	    '+': function(x, y) {
	    	return x + y;
	    },
	    '-': function(x, y) {
	    	return x - y;
	    },
	    '*': function(x, y) {
	    	return x * y;
	    },
	    '/': function(x, y) {
	    	return x / y;
	    }
	};

    var stack = [];
    
   	polish.forEach(function (token) {
		if (token in operators) {
		    var ref = [stack.pop(), stack.pop()],
		        y = ref[0],
		        x = ref[1];
		   	stack.push(operators[token](x, y));
	  	} else {
	    stack.push(parseFloat(token));
	  	}
	});

    return stack.pop();
};