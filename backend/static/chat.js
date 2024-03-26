/* Este era el ideal pero al recargase la pagina da error al intentar reDeclarar varibles existentes
let userName = sessionStorage.getItem('userName'); `${userName}:`;
let chatUserName = document.getElementsByClassName('chatUser');
*/
// Mostrar el nombre del usuario
for (let i = 0; i < (document.getElementsByClassName('chatUser')).length; i++) {
    document.getElementsByClassName('chatUser')[i].innerText = `${sessionStorage.getItem('userName')} :`;
}

/* let assistantSelected = sessionStorage.getItem('assistantSelected');
let chatIaName = document.getElementsByClassName('chatIa');
 */
// Mostrar el nombre del asistente
for (let i = 0; i < (document.getElementsByClassName('chatIa')).length; i++) {
    (document.getElementsByClassName('chatIa'))[i].innerText = `${sessionStorage.getItem('assistantSelected')} :`;
}

/* let assistantSelectedId = sessionStorage.getItem('assistantSelectedId');
let chatIaContainer = document.getElementsByClassName('chat-ia-container');
 */
for (let i = 0; i < (document.getElementsByClassName('chat-ia-container')).length; i++) {
    // Crear un elemento <img> y establecer sus atributos
    let imgElement = document.createElement('img');
    imgElement.src = `../static/${sessionStorage.getItem('assistantSelectedId')}.jfif`;
    imgElement.alt = sessionStorage.getItem('assistantSelectedId');
    imgElement.className = 'assistant-icon';

    // Agregar el elemento <img> al contenedor sin reemplazar el contenido existente
    document.getElementsByClassName('chat-ia-container')[i].appendChild(imgElement);
}

document.getElementById("salir-btn").addEventListener("click", () => {
    sessionStorage.removeItem("assistantSelected");
    sessionStorage.removeItem("assistantSelectedId");
    /*     assistantSelected = "";
        assistantSelectedId = "";
        chatIaContainer = "";
        chatUserName = "";
        userName = ""; */
    const elements = document.getElementsByClassName("fadeOut");
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove("animate__fadeIn");
        elements[i].classList.add("animate__fadeOut");
    }
})
/* 
//input chat IA borrar y bloquear
document.getElementById("prompt-text").addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        // Deshabilitar el campo de entrada durante 0.5 segundos
        document.getElementById("prompt-text").disabled = true;
        document.getElementById("send-message").disabled = true;
        setTimeout(() => {
            document.getElementById("prompt-text").value = "";
            // Habilitar el campo de entrada después de borrar el contenido
            document.getElementById("prompt-text").disabled = false;
            document.getElementById("send-message").disabled = false;
        }, 1000)
    }
})

//boton chat IA borrar y bloquear
document.getElementById("send-message").addEventListener("click", sendChatIa)

function sendChatIa(){
    // Deshabilitar el campo de entrada durante 0.5 segundos
    document.getElementById("send-message").disabled = true;
    document.getElementById("prompt-text").disabled = true;
    setTimeout(() => {
        document.getElementById("prompt-text").value = "";
        // Habilitar el campo de entrada después de borrar el contenido
        document.getElementById("prompt-text").disabled = false;
        document.getElementById("send-message").disabled = false;
    }, 1000)
} */