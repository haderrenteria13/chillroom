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
})