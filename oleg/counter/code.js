const btnUp = document.getElementById('plus');
const btnLow = document.getElementById('minus');
const result = document.querySelector('.result');


function countUp() {
    let plus = result.textContent;
    result.textContent = parseInt(plus) + 1; 
}

btnUp.addEventListener('click', countUp);

function countDown() {
    let minus = result.textContent;
    result.textContent = parseInt(minus) - 1; 
}

btnLow.addEventListener('click', countDown);
