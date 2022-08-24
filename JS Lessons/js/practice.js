let myWay = {
    name: 'Vitaliy',
    age: 33,
    profession: 'seaman',
    is_married: true,
    city: 'Chornomorsk',
    phone: '093-335-5229',
    meduzaFan() {
        console.log('Vitaliy gave pizdi in ufc');
    },
    drinkBeer() {
        console.log('drinking');
    },
    children: [
        { 
            name: 'Vladislav',
            age: 6 
        },
        {
            name: 'Unknown',
            age: 'undefined',
        }
    ],
}
// myWay.children[0].name или myWay.children[1].name - для обращения к массиву.