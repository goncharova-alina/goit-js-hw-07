const incrBtnRef = document.querySelector('[data-action="increment"]');
const decrBtnRef =document.querySelector('[data-action="decrement"]');
const counter = document.querySelector('span')
let counterValue = 0;

const increment = () => {
    counterValue += 1;
    counter.textContent = counterValue;
}

const decrement = () => {
    counterValue -= 1;
    counter.textContent = counterValue;
}

incrBtnRef.addEventListener('click', increment);
decrBtnRef.addEventListener('click', decrement);



// Счетчик состоит из спана и кнопок, которые должны 
// увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет 
// хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения 
// и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, 
// вызовы функций и обновление интерфейса