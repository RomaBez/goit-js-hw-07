const userName = document.querySelector(`#name-input`);
const changeName = document.querySelector("#name-output");

userName.addEventListener('input', event => {
    const name = event.currentTarget.value.trim();
    changeName.textContent = name || 'Anonymous';
})

