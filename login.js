document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Dummy validation for demonstration purposes
    if(username === "sooraj" && password === "1234") {
        window.location.href = 'index.html';
    } else {
        alert('Invalid username or password.');
    }
});

document.getElementById('forgotPassword').addEventListener('click', function() {
    alert('Redirecting to password recovery page.');
    // Here you can redirect to the actual password recovery page
    window.location.href = "login.html";
});
