document.addEventListener('DOMContentLoaded', () => {
    // Hide discount input container initially
    const discountContainer = document.getElementById('discountContainer');
    if (discountContainer) {
        discountContainer.style.display = 'none';
    }

    // FAQ Accordion Logic
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            // Toggle current item
            item.classList.toggle('active');
        });
    });

    // Pricing Plan Selection Logic
    const planButtons = document.querySelectorAll('.select-plan-btn');
    const selectedPlanName = document.getElementById('selectedPlanName');
    const selectedPlanPrice = document.getElementById('selectedPlanPrice');

    planButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const plan = btn.getAttribute('data-plan');
            const price = btn.getAttribute('data-price');
            
            // Update order summary in registration form
            if (selectedPlanName && selectedPlanPrice) {
                selectedPlanName.textContent = plan + ' Membership';
                selectedPlanPrice.textContent = price;
            }
        });
    });
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
