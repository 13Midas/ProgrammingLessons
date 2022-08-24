const button = document.getElementById('btn');
const color = document.querySelector('.color');

//const colors = ['#F1948A', '#ABEBC6', '#F9E79F', '#D7BDE2', '#AED6F1']

const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', ];


button.addEventListener('click', () => {
    let hexColor = genHex();
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
    //    console.log('click');
    //    console.log(getRandomColor());
});

function genHex() {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomColor()]
    }

    return hexColor;
}

function getRandomColor() {
    return Math.floor(Math.random() * hex.length);
}
