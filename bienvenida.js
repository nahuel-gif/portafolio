// Mensaje de bienvenida al cargar la página
window.onload = function() {
    // Crear el contenedor del mensaje
    const welcomeMessage = document.createElement("div");
    welcomeMessage.className = "welcome-message";
    welcomeMessage.innerHTML = `
        <h2>¡Bienvenido a la página de Franco Colapinto!</h2>
        <p>Gracias por visitar esta página. Aquí encontrarás toda la información sobre mi carrera en la F1.</p>
        <button id="closeWelcome">Cerrar</button>
    `;

    // Agregar el mensaje al cuerpo de la página
    document.body.appendChild(welcomeMessage);

    // Función para cerrar el mensaje de bienvenida
    document.getElementById("closeWelcome").onclick = function() {
        welcomeMessage.style.display = "none";
    };
};

function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
};