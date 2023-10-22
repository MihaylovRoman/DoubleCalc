// Для переворота карточки
const frontSide = document.querySelector('.front');
const backSide = document.querySelector('.back');
const buttonReverse = document.querySelectorAll('.settings');

buttonReverse.forEach((e) => {
    e.addEventListener('click', () => {
        frontSide.classList.toggle('rotateFront');
        backSide.classList.toggle('rotateBack');
    })
})
//
//
//
// Для расчета КУБА
const Length = document.querySelector('.front__in-S');
const buttonCube = document.querySelector('.front__button')
const buttonClear = document.querySelector('.clear');
let firstText = document.querySelector('.ans__one');
let secondText = document.querySelector('.ans__two');
let thirdText = document.querySelector('.ans__three');


//Кнопка для очистки
buttonClear.addEventListener('click', () => {
    firstText.textContent = 'Площадь грани:';
    secondText.textContent = 'Площадь полной поверхности:';
    thirdText.textContent = 'Объем:';
    Length.value = '';
})

//Кнопка для рассчетов
buttonCube.addEventListener('click', () => {

    let b = +Length.value;

    let Sgran = b ** 2;
    let S = 6 * Sgran;
    let V = b ** 3;

    console.log(S);

    firstText.textContent = 'Площадь грани: ' + Sgran;
    secondText.textContent = 'Площадь полной поверхности: ' + S;
    thirdText.textContent = 'Объем: ' + V;
})
//
//
//
// Для рассчетов поездки
const buttonRoad = document.querySelector('.back__button');
const buttonBackClear = document.querySelector('.back-clear');
let inputs = document.querySelectorAll('.back__input');


//Кнопка для рассчетов
buttonRoad.addEventListener('click', () => {
    
    let a = +inputs[0].value;
    let b = +inputs[1].value;
    let c = +inputs[2].value;
    
    if (a == '' || b == '' || c == '') {
        alert("Введите данные!");
    } else {
        let totalPrice = (inputs[1].value/100) * inputs[2].value * inputs[0].value;
        alert("Цена данной поездки: " + totalPrice);
    }


})
//Кнопка очистки
buttonBackClear.addEventListener('click', () => {
    for(let i = 0; i < inputs.length; i++){
        inputs[i].value = '';
    }
})







