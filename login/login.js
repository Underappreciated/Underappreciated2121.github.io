document.getElementById('show-password').addEventListener('click', function() {
    var passwordInput = document.getElementById('password-input');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        this.style.backgroundImage = "url(eye-slash-icon.png)";
    } else {
        passwordInput.type = 'password';
        this.style.backgroundImage = "url(eye-icon.png)";
    }
});
