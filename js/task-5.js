function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const clickBtn = document.querySelector('.change-color');
const spamColor = document.querySelector('.color');
const bodyColor = document.querySelector('body');

clickBtn.addEventListener('click', colorBtn);

function colorBtn(){
  const colorChanger = getRandomHexColor();
  bodyColor.style.backgroundColor = colorChanger;
  spamColor.textContent = colorChanger;
}