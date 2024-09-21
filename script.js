const registerForm = document.getElementById('register-form');

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Check if all fields are filled
    if (!name || !email || !password || !confirmPassword) {
        alert('Please fill in all fields');
        return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    // Password validation
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordPattern.test(password)) {
        alert('Password must be at least 6 characters long, include at least one uppercase letter, one number, and one special character');
        return;
    }

    // If all validations are passed
    window.alert('Successfully registered. Have a nice shopping!');

    // Log the data (or send it to the server)
    console.log({
        name,
        email,
        password
    });

    // Optionally, reset the form after successful submission
    registerForm.reset();
});
