let formEl = document.getElementById('form-element');
let submitBtn = document.getElementById('submitButton');
let nameInput = document.getElementById('name');
let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('password');

function validateName(){
    let errorMessage = document.getElementById('errorName');

    if(nameInput.value === ''){
        errorMessage.textContent = 'Name is required';
        return false;
    } else {
        errorMessage.textContent = '';
        return true;
    }

}

function validateEmail(){
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    let errorMessage = document.getElementById('errorEmail');

    if(emailInput.value === ''){
        errorMessage.textContent = 'Email is required';
        return false
    } else if(!emailPattern.test(emailInput.value)){
        errorMessage.textContent = 'Invalid email address';
        return false;
    } else{
        errorMessage.textContent = '';
        return true;
    }
}

function validatePassword(){
        let passPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/;
        let pass = '1234Galos'
        let errorMessage = document.getElementById('errorPassword');

        if(passwordInput.value === '') {
            errorMessage.textContent = 'Password is required';
            return false;
        }

        if(!passPattern.test(passwordInput.value) || passwordInput.value !== pass) {
            errorMessage.textContent = 'Invalid password';
            return false;
        }

        errorMessage.textContent = '';
        return true;
}

formEl.addEventListener('submit', (event)=>{
    event.preventDefault();

    let isValid = true;

    isValid = isValid && validateName();
    isValid = isValid && validateEmail();
    isValid = isValid && validatePassword();

    let message =  document.getElementById('submitMessage');

    if(isValid){
        console.log("Submitting");
        message.textContent = 'Submitting';
    } else {
        message.textContent = 'Please fix the error';
    }
});