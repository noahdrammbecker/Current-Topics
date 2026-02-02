/**
 * The Gilded Goose - Password Gate
 * "Gilded not Gold."
 */

(function() {
    'use strict';

    const PASSWORD = 'gilded not gold.';
    const STORAGE_KEY = 'gilded_goose_admitted';

    // Check if already admitted
    if (sessionStorage.getItem(STORAGE_KEY) === 'true') {
        window.location.href = 'home.html';
        return;
    }

    const form = document.getElementById('gate-form');
    const input = document.getElementById('password-input');
    const error = document.getElementById('gate-error');

    // Alternative accepted passwords for flexibility
    const acceptedPasswords = [
        'gilded not gold.',
        'gilded not gold',
    ];

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        checkPassword();
    });

    input.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            checkPassword();
        }
    });

    // Hide error when typing
    input.addEventListener('input', function() {
        error.classList.remove('visible');
    });

    function checkPassword() {
        const entered = input.value.toLowerCase().trim();

        if (acceptedPasswords.includes(entered)) {
            // Admitted
            sessionStorage.setItem(STORAGE_KEY, 'true');
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.8s ease';

            setTimeout(function() {
                window.location.href = 'home.html';
            }, 800);
        } else {
            // Wrong password
            error.classList.add('visible');
            input.value = '';
            input.focus();

            // Subtle shake animation
            input.style.animation = 'none';
            input.offsetHeight; // Trigger reflow
            input.style.animation = 'shake 0.5s ease';
        }
    }

    // Add shake animation dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            20%, 60% { transform: translateX(-5px); }
            40%, 80% { transform: translateX(5px); }
        }
    `;
    document.head.appendChild(style);

    // Focus input on load
    setTimeout(function() {
        input.focus();
    }, 500);
})();
