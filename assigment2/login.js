const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const strengthBar = document.getElementById('strengthBar');
const passwordMatchError = document.getElementById('passwordMatchError');
const email = document.getElementById('email');
const emailError = document.getElementById('emailError');
const form = document.getElementById('registrationForm');

password.addEventListener('input', () => {
    const value = password.value;
    const strength = getPasswordStrength(value);

    strengthBar.className = 'strength-bar';
    if (strength === 'weak') strengthBar.classList.add('weak');
    else if (strength === 'moderate') strengthBar.classList.add('moderate');
    else if (strength === 'strong') strengthBar.classList.add('strong');
});

confirmPassword.addEventListener('input', () => {
    if (confirmPassword.value !== password.value) {
        passwordMatchError.style.display = 'inline';
    } else {
        passwordMatchError.style.display = 'none';
    }
});

email.addEventListener('input', () => {
    const isValid = email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    emailError.style.display = isValid ? 'none' : 'inline';
});

function getPasswordStrength(password) {
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[\W_]/.test(password)) score++;

    if (score <= 2) return 'weak';
    if (score <= 4) return 'moderate';
    return 'strong';
}


form.addEventListener('submit', (e) => {
    if (confirmPassword.value !== password.value) {
        e.preventDefault();
        alert('Passwords must match!');
    }
    if (!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        e.preventDefault();
        alert('Invalid email address!');
    }
});