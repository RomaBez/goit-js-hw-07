const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];

const listEl = document.querySelector(`.gallery`);

// images.forEach(image => {
//   const itemEl = document.createElement(`li`);
//   const imageEl = document.createElement(`img`);
//   imageEl.setAttribute('src', image.url);
//   imageEl.setAttribute('alt', image.alt);
//   itemEl.classList.add('li-indent')
//   imageEl.style.maxWidth = `100%`;
//   imageEl.style.height = `auto`;
//   itemEl.style.marginRight = `24px`;
//   itemEl.append(imageEl);
//   listEl.append(itemEl);
// })

// ****** не знаю, як далі правильно працювати з кодом вище...****//

function createItemEL(item) {
  const itemEl = document.createElement('li');
  itemEl.classList.add('li-indent');
  itemEl.style.marginRight = `24px`;
  const imageEl = document.createElement(`img`);
  imageEl.setAttribute('src', item.url);
  imageEl.setAttribute('alt', item.alt);
  imageEl.style.maxWidth = `100%`;
  imageEl.style.height = `auto`;
  itemEl.append(imageEl);
  return itemEl;
}

const results = images.map(createItemEL);
listEl.append(...results);
