// Login Form Validation and Interaction
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get values from the form fields
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (email === '' || password === '') {
        alert('Please fill in both username and password');
        return;
    }

    // Placeholder for real authentication (API call)
    if (email === 'user' && password === 'password123') {
        alert('Login successful!');
        window.location.href = 'index.html';  // Redirect to homepage
    } 
});