// Validation for booking a consultation
function validateForm() {
    const name = document.getElementById('name').value;
    const sname = document.getElementById('sname').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.trim() === '') {
        alert('Please, enter your name!');
        return false;
    }
    if (sname.trim() === '') {
        alert('Please, enter your surname!');
        return false;
    }
    if (phone.trim() === '') {
        alert('Please, enter your phone number!');
        return false;
    }
    if (date.trim() === '') {
        alert('Please, enter the you want to meet with us!');
        return false;
    }
    if (!emailRegex.test(email)) {
        alert('Please, enter a valid email address!');
        return false;
    }
    return true;
}

// Validation for contact form
function validateContact() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.trim() === '') {
        alert('Please, enter your name!');
        return false;
    }
    if (!emailRegex.test(email)) {
        alert('Please, enter a valid email address!');
        return false;
    }
    return true;
}

// Login validation
function validateLogin(form) {
    const username = form.querySelector('input[name="uname"]');
    const password = form.querySelector('input[name="psw"]');

    clearErrors(form);

    let isValid = true;

    if (username.value.trim() === '') {
        showError(username, 'Username is required.');
        isValid = false;
    } else if (username.value.length < 3) {
        showError(username, 'Username must be at least 3 characters.');
        isValid = false;
    }

    if (password.value.trim() === '') {
        showError(password, 'Password is required.');
        isValid = false;
    } else if (password.value.length < 6) {
        showError(password, 'Password must be at least 6 characters.');
        isValid = false;
    }

    return isValid;
}

function showError(input, message) {
    const error = document.createElement('span');
    error.className = 'error-message';
    error.style.color = 'red';
    error.style.fontSize = '12px';
    error.textContent = message;

    input.parentElement.appendChild(error);
}

function clearErrors(form) {
    const errors = form.querySelectorAll('.error-message');
    errors.forEach(error => error.remove());
}
