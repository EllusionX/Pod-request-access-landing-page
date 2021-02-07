const form = document.querySelector('.form form');
const emailInput = document.querySelector('.form form input[type=email]');
const errorMessage = document.querySelector('.form .error-message')
const button = document.querySelector('.form form button')

form.addEventListener('submit', (e)=> {
    e.preventDefault();

    let emailValue = emailInput.value;
    if(validateEmail(emailValue)) {
        errorMessage.classList.remove('error');
        button.classList.remove('error-adjust');
        emailInput.value = '';
    } else {
        errorMessage.classList.add('error');
        button.classList.add('error-adjust');
    }
});


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}