document.getElementById('userForm').addEventListener('submit', async function(e){

    e.preventDefault();

    let email = document.getElementById('exampleFormControlInput1').value;
    let password = document.getElementById('inputPassword').value;

    try {
        
        let USER_API = await fetch('https://fakestoreapi.com/users');

        let users = await USER_API.json();

        const user = users.find(user => user.email === email && user.password === password);
    

        if(user){
            window.location.href = '../index.html';
        }else{
            alert('Email or Password is incorrect!');
        }

    } catch (error) {
        console.error('Error:', error)
    }

});

