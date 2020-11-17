const inputRef = document.querySelector('#font-size-control');
console.dir(inputRef);
const textRef = document.querySelector('#text');

inputRef.addEventListener('input', () => {
    textRef.style.fontSize = `${inputRef.valueAsNumber}px`
})






// Напиши скрипт, который реагирует на изменение значения 
// input#font-size-control (событие input) и изменяет 
// инлайн-стиль span#text обновляя свойство font-size. 
// В результате при перетаскивании ползунка будет меняться размер текста.

/*подсказка из чата:
параметр input : valueAsNumber
вашSelectorSpan.style.fontSize = `${значение переменной}px`
вашSelectorInput.valueAsNumber*/