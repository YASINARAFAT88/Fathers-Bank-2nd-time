document.getElementById('login-submit').addEventListener('click', function () {
    const userEmail = document.getElementById('user-email')
    const Email = userEmail.value;

    const userPassword = document.getElementById('user-password')
    const Password = userPassword.value;

    //get 
    if (Email == 'yasin80545859@gmail.com' && Password == '12345678') {
        window.location.href = 'banking.html';
    }
})