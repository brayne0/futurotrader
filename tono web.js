document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggle-theme");
    const body = document.body;
  
    if (localStorage.getItem("theme") === "dark") {
      body.classList.add("dark-mode");
      toggleButton.textContent = "☀️ Modo Claro";
    } else {

      body.classList.add("light-mode");
      toggleButton.textContent = "🌙 Modo Oscuro";
    }
  
    toggleButton.addEventListener("click", function () {
      body.classList.toggle("dark-mode");
      body.classList.toggle("light-mode");
  
      if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        toggleButton.textContent = "☀️ Modo Claro";
      } else {
        localStorage.setItem("theme", "light");
        toggleButton.textContent = "🌙 Modo Oscuro";
      }
  
      updateTextColor();
    });
  
  
    function updateTextColor() {
      const neonTextElements = document.querySelectorAll(".neon-text");
      if (body.classList.contains("dark-mode")) {
        neonTextElements.forEach((element) => {
          element.style.color = "#00bfff"; // Azul claro
          element.style.textShadow =
            "0px 0px 5px #00bfff, 0px 0px 10px #00bfff, 0px 0px 20px #00bfff";
        });
      } else {
        neonTextElements.forEach((element) => {
          element.style.color = "#006699"; 
          element.style.textShadow = "none"; 
        });
      }
    }
  
    updateTextColor();
  });
  