const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

  const galleryRef = document.querySelector('#gallery');

  images.forEach(element => {
    const itemRef = document.createElement('li');
    const imageRef = document.createElement('img');

    imageRef.src = element.url;
    imageRef.alt = element.alt;

    imageRef.classList.add('img');
    galleryRef.classList.add('gallery');
    itemRef.classList.add('gallery-item');

    imageRef.insertAdjacentHTML('afterbegin', element);

    galleryRef.append(itemRef);
    itemRef.append(imageRef);
    console.log(element); 

  })



//   Напиши скрипт для создания галлереи изображений по массиву данных.
// 
//   Используй массив объектов images для создания тегов img вложенных в li. 
//   Для создания разметки используй шаблонные строки и insertAdjacentHTML().
//   Все элементы галереи должны добавляться в DOM за одну операцию вставки.
//   Добавь минимальное оформление галереи флексбоксами или гридами 
//   через css-классы.