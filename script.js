const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Tunateka mabadiliko ya maneno hapa yaendane na Gold/Lavender
    if (document.body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = 'Modi ya Silver';
    } else {
        themeToggleBtn.textContent = 'Badili Mandhari';
    }
});

