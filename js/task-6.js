function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNum = document.querySelector('input[type="number"]');
const crtBtn = document.querySelector('button[data-create]');
const dstrBtn = document.querySelector('button[data-destroy]');
const boxesDiv = document.getElementById('boxes');

crtBtn.addEventListener('click', ()=> (createBoxes(inputNum.value)));
dstrBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
    
    if (amount < 1 || amount > 100) {   
        return alert('please add number from 1 to 100')
    }
    
    const boxes = [];
    let boxSize = 30;
    
    for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.style.width = `${boxSize}px`;
        box.style.height = `${boxSize}px`;
        box.style.backgroundColor = getRandomHexColor();
        boxes.push(box);
        boxSize += 10;
    }
    
    boxesDiv.append(...boxes);
    inputNum.value = "";
}

function destroyBoxes(){
    boxesDiv.innerHTML = '';
}

