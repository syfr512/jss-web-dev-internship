document.addEventListener('DOMContentLoaded', () => {
    // Hide discount input container initially by setting display block but keeping it visually hidden by CSS
    const discountContainer = document.getElementById('discountContainer');
    if (discountContainer) {
        discountContainer.style.display = 'none';
    }
});

function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.querySelector('.toggle-password');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    }
}

function toggleDiscount() {
    const container = document.getElementById('discountContainer');
    const icon = document.querySelector('.discount-toggle i');
    
    if (container.style.display === 'none' || container.style.display === '') {
        container.style.display = 'flex';
        setTimeout(() => {
            container.classList.add('active');
        }, 10);
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
    } else {
        container.classList.remove('active');
        setTimeout(() => {
            container.style.display = 'none';
        }, 300);
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
    }
}
