document.getElementById('createAccountForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    document.getElementById('emailError').style.display = 'none';
    document.getElementById('passwordError').style.display = 'none';
    document.getElementById('emailInput').style.borderColor = '';
    document.getElementById('passwordInput').style.borderColor = '';

    let email = document.getElementById('emailInput').value;
    let password = document.getElementById('passwordInput').value;

    // designing for empty inputs
    let valid = true;

    if (!email) {
        document.getElementById('emailError').style.display = 'block';
        document.getElementById('emailInput').style.borderColor = 'red';
        valid = false;
    }

    if (!password) {
        document.getElementById('passwordError').style.display = 'block';
        document.getElementById('passwordInput').style.borderColor = 'red';
        valid = false;
    }

    if (!valid) return; // Exit if validation fails

    // If validation completed go to login page
    window.location.href = '/pages/signin.html';
});
