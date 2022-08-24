debugger
/*
var x = prompt ("Введите число");
var y = prompt ("Введите число");
var z = prompt ("Введите 1 для +, 2 для -, 3 для *, 4 для /");

var x = parseInt(x);
var y = parseInt(y);

var result;

*/

/*
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
*/


/*
if (z == 1) {
	alert(result = x + y);
}
else if (z == 2) {
	alert(result = x - y);
}
else if (z == 3) {
	alert(result = x * y);
}
else if(z == 4) {
	alert(result = x / y);
}
*/

var year = prompt('How old are you');

switch(true) {
	case year >= 0 && year <= 12: answer = 'you are a child';
		break;
	case year >= 13 && year <= 17: answer = 'you are a teenager';
		break;
	case year >= 18 && year <= 30: answer = 'you are in your prime';
		break;
	case year >= 31 && year <= 45: answer = 'time to plant a tree and raise a son';
		break;
	case year >= 60: answer = 'you will retire soon';
}
alert(answer);