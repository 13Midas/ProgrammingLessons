debugger

let year = prompt('How old are you');
	
	if (year >= 0 && year <= 12) {
		document.write('you are a child');
	}
	else if (year >= 13 && year <= 17) {
		document.write('you are a teenager');
	}
	else if (year >= 18 && year <= 30) {
		document.write('you are in your prime');
	}
	else if (year >= 31 && year <= 45) {
		document.write('time to plant a tree and raise a son');
	}
	else if (year >= 60) {
		document.write('you will retire soon');
 	}
	else{
		document.write('its not age');
	}


/*var age = prompt('сколько вам лет');
if (age <= 12) {
	document.write('ты ребенок');
}
else if (age <= 17) {
	document.write('ты подросток');
}
else if (age <= 30) {
	document.write('ты в расцвете сил');
}
else if (age <= 45) {
	document.write('пора садить дерево и растить сына');
}
else if (age <= 60) {
	document.write('ты скоро на пенсию');
}
else if (age <= 120) {
	document.write('вот и пенсия');
}
else if (age > 120) {
	document.write('быть не может');
}*/





/*let year = prompt("Сколько вам лет?", "");
//year = +year;
if (year >= 0 && year <= 12) {
 alert("ты ребенок");
} else if (year >= 13 && year <= 17) {
 alert("ты подросток");
} else if (year >= 18 && year <=30) {
 alert("ты в расцвете сил");
} else if (year >= 31 && year <= 45) {
 alert("пора садить дерево и растить сына");
} else if (year >= 60) {
 alert("скоро на пенсию");
} /*else if (year != +year) {
 alert("Ошибка, введите цифры, пожалуйста");
}*/