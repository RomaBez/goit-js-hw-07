const categorieEl = document.querySelector(`#categories`);
const itemsEl = categorieEl.querySelectorAll('li.item');
console.log(`Number of categories:`, itemsEl.length)

itemsEl.forEach(itemEl => {
    console.log(`Category: ${itemEl.querySelector(`h2`).textContent} \n Elemetns: ${itemEl.querySelectorAll(`li`).length}`)
})
