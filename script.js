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

// SEHEMU YA KUSHUGHULIKIA FOMU BILA KUHAMA UKURASA (AJAX)
const form = document.getElementById("my-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", async function(event) {
    event.preventDefault(); // Inazuia browser isifungue ukurasa wa nje wa Formspree
    
    const data = new FormData(event.target);
    
    // HAPA NDIPO PALIPOKUWA NA MAKOSA - Sasa nimeweka link kamili na ID yako mwanangu!
    const response = await fetch("https://formspree.io/f/mppqyvaa", {
        method: "POST",
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    });
    
    if (response.ok) {
        // Kama ujumbe umeenda vizuri
        status.style.display = "block";
        status.style.color = document.body.classList.contains('dark-mode') ? "#fbbf24" : "#4a148c"; // Inabadilika kulingana na rangi ya mandhari
        status.textContent = "Asante! Ujumbe wako umetumwa kikamilifu.";
        form.reset(); // Inasafisha fomu iwe wazi tena
    } else {
        // Kama kuna tatizo limetokea
        status.style.display = "block";
        status.style.color = "red";
        status.textContent = "Oops! Kuna tatizo limetokea, jaribu tena.";
    }
});
