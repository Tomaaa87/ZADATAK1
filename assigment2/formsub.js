document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); 

    const formData = new FormData(this); 
    const jsonData = Object.fromEntries(formData.entries()); 

    setTimeout(() => {
        document.getElementById('successMessage').style.display = 'block'; 
        this.reset(); 
        const strengthBar = document.getElementById('strengthBar');
        if (strengthBar) strengthBar.className = 'strength-bar'; 
    }, 1000); 
});