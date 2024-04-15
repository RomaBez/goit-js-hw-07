const form = document.querySelector('.login-form');

const onForm = event => {
    event.preventDefault();
    
const formEmail = event.currentTarget.elements.email.value.trim();
const formPassword = event.currentTarget.elements.password.value.trim();
if (formEmail === '' || formPassword === '') {
    return alert('All form fields must be filled in');
}
    
const info = {
email: formEmail,
password: formPassword,
}
    
    console.log(info);
    
event.currentTarget.reset();

}
form.addEventListener('submit', onForm);
