// Obtener el elemento input y el botón de bienvenida
let btnWelcome = document.getElementById("btn-welcome");

document.getElementById("input-welcome").addEventListener("keypress", function (event) {
    // Verificar si la tecla presionada es "Enter"
    if (event.key === "Enter") {
        let userName = document.getElementById("input-welcome").value;
        // Guardar userName en sessionStorage
        sessionStorage.setItem("userName", userName);
        // Agregar la clase "hidden" al input
        this.classList.add("animate__fadeOut");
        setTimeout(() => {
            this.classList.add("hidden");
        }, 500);
        // Remover la clase "hidden" del botón de bienvenida
        setTimeout(() => {
            btnWelcome.classList.remove("hidden");
            btnWelcome.classList.add("animate__fadeIn");
        }, 500);
    }
});

// Agregar el escuchador de eventos de clic al botón de bienvenida
btnWelcome.addEventListener("click", () => {
    const elements = document.getElementsByClassName("fadeOut");
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove("animate__fadeIn");
        elements[i].classList.add("animate__fadeOut");
    }
    }
)
