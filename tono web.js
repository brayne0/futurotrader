document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggle-theme");
    const body = document.body;
    
    // Verificar si el usuario ya tiene una preferencia guardada
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

        // Actualizar el color de texto en la sección de "Análisis en Tiempo Real"
        updateTextColor();
    });

    // Asegurar que el texto en la sección "Análisis en Tiempo Real" sea visible según el modo
    function updateTextColor() {
        const section = document.getElementById("analisis");
        if (body.classList.contains("dark-mode")) {
            section.classList.add("dark-text");
        } else {
            section.classList.remove("dark-text");
        }
    }

    // Aplicar ajuste inicial al cargar la página
    updateTextColor();
});
