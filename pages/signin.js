document.getElementById('userForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    document.getElementById('emailError').style.display = 'none';
    document.getElementById('passwordError').style.display = 'none';
    document.getElementById('exampleFormControlInput1').style.borderColor = '';
    document.getElementById('inputPassword').style.borderColor = '';

    let email = document.getElementById('exampleFormControlInput1').value;
    let password = document.getElementById('inputPassword').value;

    // validation true
    let valid = true;

    if (!email) {
        document.getElementById('emailError').style.display = 'block';
        document.getElementById('exampleFormControlInput1').style.borderColor = 'red';
        valid = false;
    }

    if (!password) {
        document.getElementById('passwordError').style.display = 'block';
        document.getElementById('inputPassword').style.borderColor = 'red';
        valid = false;
    }

    // if validation is false stop the execution
    if (!valid) return; 

    try {
        let USER_API = await fetch('https://fakestoreapi.com/users');
        let users = await USER_API.json();

        const userInfo = users.find(user => user.email === email && user.password === password);

        if (userInfo) {
            window.location.href = '../index.html';
        } else {
            alert('Email or Password is incorrect!');
        }

    } catch (error) {
        console.error('Error:', error);
    }
});
