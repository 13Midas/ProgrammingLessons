const button = document.getElementById('btn');


//const colors = ['green', 'blue', 'red', 'yellow', '#E7E4AF', '148, 141, 8', '#F0FFFF', '137, 207, 240', '#5F9EA0', '#00A36C', '#5D3FD3', '204, 204, 255', '#96DED1', '#0437F2', '#E1C16E', '#F0E68C', '#A95C68', '#722F37', '#C0C0C0' ];


function randomColor() {
    const colors = ['green', 'blue', 'red', 'yellow', '#E7E4AF', '148, 141, 8', '#F0FFFF', '137, 207, 240', '#5F9EA0', '#00A36C', '#5D3FD3', '204, 204, 255', '#96DED1', '#0437F2', '#E1C16E', '#F0E68C', '#A95C68', '#722F37', '#C0C0C0' ];
    const randomIndex = Math.floor(Math.random() * colors.length)
    return colors[randomIndex];
};


button.addEventListener('click', () => {
    document.body.style.backgroundColor = randomColor();
});

