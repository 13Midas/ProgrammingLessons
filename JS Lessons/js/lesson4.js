var x = prompt ("Введите число");
var y = prompt ("Введите число");
var z = prompt ("Введите 1 для +, 2 для -, 3 для *, 4 для /");

var x = parseInt(x);
var y = parseInt(y);

var result;

switch(z) {
	case "1": result = x+y;
		break;
	case "2": result = x-y;
		break;
	case "3": result = x*y;
		break;
	case "4": result = x/y;
		break;
	default: result = "Ввели некорректное число";
};
alert(result);