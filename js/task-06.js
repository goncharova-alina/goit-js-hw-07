const inputRef = document.querySelector('#validation-input');
// console.log(inputRef)
const dataLength = Number(inputRef.dataset.length);

inputRef.addEventListener('blur', () => {
    inputRef.classList.add('invalid');
    if(inputRef.value.length === dataLength) {
        inputRef.classList.add('valid');
        inputRef.classList.remove("invalid");

    } else if (inputRef.value.length === 0) {

    inputRef.classList.remove('valid');
    inputRef.classList.remove('invalid');
    }   
})




// Напиши скрипт, который бы при потере фокуса на инпуте, 
// проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, 
// если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.