//fuck you

const button = document.getElementById('btn');
const expressionsPlace = document.querySelector('.expressionsPlace');


class Expression {
    author;
    quote;
    color;

  
    constructor(author, quote, color='purple') {
      this.author = author;
      this.quote = quote;
      this.color = color;
    }
  }
  
  const expressions = [
    new Expression('В. Бабий', 'Еще одно рево и хватит :)', 'green'),
    new Expression('Д. Пашков', 'Неси меня рshajsdhddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbsadhjcbsdhkjcbsdjhcbsdchsdbchjsbcisucbsiukvhbcskihbsciushовноeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee!'),
    new Expression('Д. fff', 'aaa' , 'red'),
  ]

  function randomExpressions() {
    return Math.floor(Math.random() * expressions.length);
}

  button.addEventListener('click', () => {
    const expression = expressions[randomExpressions()]
    expressionsPlace.innerHTML = `${expression.quote}</br><span style="color: ${expression.color}">${expression.author}</span>`
    console.log(`${expression.quote}</br><span style="color: ${expression.color}">${expression.author}</span>`)
    
    //expressionsPlace.textContent = expression.author

})


//document.querySelector('.expressionsPlace').style.textAlign = "left"



/*
const button = document.getElementById('btn');
const expressionsPlace = document.querySelector('.expressionsPlace');
const expressions = ['da','net','mojet',];

function randomExpressions() {
    return Math.floor(Math.random() * expressions.length);
}

button.addEventListener('click', () => {
    let xxx = expressions[randomExpressions()];
    expressionsPlace.textContent = xxx;
    
});
*/






/*

let xxx = new Array()
xxx[0] = 'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa';
xxx[1] = 'bdsfsfsfffffffffffffffffffffffffffffffffffffffffffffffffffffffffsfsf';
xxx[2] = 'cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff';
xxx[3] = "dfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff";


let button = document.getElementById('btn');
let expressionsPlace = document.querySelector('.expressionsPlace');

//const comaSymbol = document.querySelector('.coma');

function randomExpressions() {
    return xxx[Math.floor(Math.random() * xxx.length)];
}
*/
/*
button.addEventListener('click', () => {
    let coma = xxx[randomExpressions()];
    comaSymbol.textContent = coma;
    
});
*/

/*
button.onclick = function(){
    expressionsPlace.innerHTML = randomExpressions();
}
*/


/*
//xxx[3] = 'da<br><br><p align="left">Konddfdfdffddffuciy</p>'

let button = document.getElementById('btn');
let expressionsPlace = document.querySelector('.container3');

function randomExpressions() {
    return xxx[Math.floor(Math.random() * xxx.length)];
}


button.onclick = function(){
    expressionsPlace.textContent = randomExpressions();
}
*/



/*
const button = document.getElementById('btn');
const expressionsPlace = document.querySelector('.expressionsPlace');
const expressions = ['da','net','mojet',];

function randomExpressions() {
    return Math.floor(Math.random() * expressions.length);
}

button.addEventListener('click', () => {
    let xxx = expressions[randomExpressions()];
    expressionsPlace.textContent = xxx;
    
});
*/