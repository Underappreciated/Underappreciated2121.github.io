document.getElementById('show-password').addEventListener('click', function() {
    var passwordInput = document.getElementById('password-input');
    var confirmPasswordInput = document.getElementById('confirm-password-input');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        confirmPasswordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
        confirmPasswordInput.type = 'password';
    }
});
