document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggle-theme");
    const body = document.body;
    
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        toggleButton.textContent = "☀️ Modo Claro";
    }

    toggleButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            toggleButton.textContent = "☀️ Modo Claro";
        } else {
            localStorage.setItem("theme", "light");
            toggleButton.textContent = "🌙 Modo Oscuro";
        }

        updateTextColor();
    });

    // Brayne Duarte #21-2193
    function updateTextColor() {
        const section = document.getElementById("analisis");
        if (body.classList.contains("dark-mode")) {
            section.classList.add("dark-text");
        } else {
            section.classList.remove("dark-text");
        }
    }

    updateTextColor();
});
