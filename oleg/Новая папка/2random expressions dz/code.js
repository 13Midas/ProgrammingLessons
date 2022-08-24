
const button = document.getElementById('btn');
const comaSymbol = document.querySelector('.comaSymbol');
const author = document.querySelector('.author');

//const container3 = document.querySelector('.container3');

const expressions = ['da','net','mojet',];


function randomExpressions() {
    return Math.floor(Math.random() * expressions.length);
}


button.addEventListener('click', () => {
    let coma = expressions[randomExpressions()];
    comaSymbol.textContent = coma;
    
});