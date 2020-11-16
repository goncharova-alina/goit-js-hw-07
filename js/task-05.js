const inputRef = document.querySelector("#name-input");
const spanRef = document.querySelector("#name-output");

function handleInput(event){
    spanRef.textContent = inputRef.value === '' ? 'незнакомец' : event.currentTarget.value
}

inputRef.addEventListener('input', handleInput);



// Напиши скрипт который, при наборе текста 
// в инпуте input#name-input (событие input), 
// подставляет его текущее значение в span#name-output. 
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.