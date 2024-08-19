function validateForm() {
    var name = document.getElementById('name').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;

    // Name validation
    if (!/^[A-Za-z]+$/.test(name)) {
        alert('Please enter a valid name with only alphabets.');
        return false;
    }

    // Password validation 
    if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        return false;
    }

    // Confirm Password validation
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return false;
    }

    // Phone validation
    if (!/^[0-9]{10}$/.test(phone)) {
        alert('Please enter a valid 10-digit phone number.');
        return false;
    }

    // Email validation
    if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    alert("Submit Successfully")
    // return true;
    
}
