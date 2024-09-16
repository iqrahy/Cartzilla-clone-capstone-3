document.getElementById('createAccountForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let emailError = document.getElementById('emailError');
    let passwordError = document.getElementById('passwordError');
    let emailInput = document.getElementById('emailInput');
    let passwordInput = document.getElementById('passwordInput');

    // default design - text none and border color empty
    emailError.style.display = 'none';
    passwordError.style.display = 'none';
    emailInput.style.borderColor = '';
    passwordInput.style.borderColor = '';


    let email = document.getElementById('emailInput').value;
    let password = document.getElementById('passwordInput').value;

    // validation true
    let valid = true;

    // condition check if email id empty or undefined 
    if (!email) {
        emailError.style.display = 'block';
        emailInput.style.borderColor = 'red';
        valid = false;
    }

     // condition check if password id empty or undefined 
    if (!password) {
        passwordError.style.display = 'block';
        passwordInput.style.borderColor = 'red';
        valid = false;
    }

    // if validation is false stop the execution
    if (!valid) return; 

    // If validation completed go to login page
    window.location.href = '/pages/signin.html';
});
