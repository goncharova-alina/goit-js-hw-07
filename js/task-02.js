const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const listRef = document.querySelector('ul');

ingredients.forEach(element => {
  const elementRef = document.createElement('li');
  elementRef.textContent = element;

  listRef.append(elementRef);
  console.log(elementRef);

} );


// const elementRef1 = document.createElement('li');
// elementRef1.textContent = ingredients[0];

// const elementRef2 = document.createElement('li');
// elementRef2.textContent = ingredients[1];

// const elementRef3 = document.createElement('li');
// elementRef3.textContent = ingredients[2];

// const elementRef4 = document.createElement('li');
// elementRef4.textContent = ingredients[3];

// const elementRef5 = document.createElement('li');
// elementRef5.textContent = ingredients[4];

// const elementRef6 = document.createElement('li');
// elementRef6.textContent = ingredients[5];


//   Напиши скрипт, который для каждого элемента массива ingredients 
//   создаст отдельный li, после чего вставит все li 
//   за одну операцию в список ul.ingredients. 
//   Для создания DOM-узлов используй document.createElement().