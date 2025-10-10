let formEl = document.getElementById('form-element');
let submitBtn = document.getElementById('submitButton');
let nameInput = document.getElementById('name');
let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('password');

function validateName(){
    let errorMessage = document.getElementById('errorName');

    if(nameInput.value === ''){
        errorMessage.textContent = 'Name is required';
    }
}

function validateEmail(){
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    let errorMessage = document.getElementById('errorEmail');

    if(emailInput.value === ''){
        errorMessage.textContent = 'Email is required';
    } else if(!emailPattern.test(emailInput.value)){
        errorMessage.textContent = 'Invalid email address';
    }
}

function validatePassword(){
    let pass = '1234'
    let errorMessage = document.getElementById('error');

    if(passwordInput.value === ''){
        errorMessage.textContent = 'Password is required';
    }

    if(!pass.test(passwordInput.value)){
        errorMessage.textContent = 'Invalid password';
    }
}

formEl.addEventListener('submit', (event)=>{
    event.preventDefault();

    validateName();
    validateEmail();
    validatePassword();
});