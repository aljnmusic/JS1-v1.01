let formEl = document.getElementById('form-element');
let submitBtn = document.getElementById('submitButton');
let nameInput = document.getElementById('name');
let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('password');

function validateName(){
    let errorMessage = document.getElementById('error');

    if(nameInput === ''){
        errorMessage.textContent = 'Name is required';
    }
}

function validateEmail(){
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    let errorMessage = document.getElementById('error');

    if(emailInput === ''){
        errorMessage.textContent = 'Email is required';
    } else if(emailInput.length < 3){}
}