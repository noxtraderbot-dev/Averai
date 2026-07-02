document.getElementById('regForm').addEventListener('submit', function(e) {
    const pass = document.getElementById('pass').value;
    const specialChar = /[!@#$%^&*(),.?":{}|<>]/;
    if (pass.length < 8 || !specialChar.test(pass)) {
        e.preventDefault();
        alert('Password must be at least 8 characters and include one special character.');
    }
});
