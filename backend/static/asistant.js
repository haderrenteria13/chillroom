document.getElementById("title-user").innerText = sessionStorage.getItem("userName");

// Función para manejar los eventos de clic y almacenar el ID en sessionStorage
function handleAsistantClick(event) {
    const clickedIAText = event.target.innerText;
    const clickedIAid = event.target.id;
    sessionStorage.setItem('asistantSelected', clickedIAText);
    sessionStorage.setItem('asistantSelectedId', clickedIAid);
    console.log(`ID clickeado: ${clickedIAid} almacenado en sessionStorage.`);
    console.log(`ID clickeado: ${clickedIAText} almacenado en sessionStorage.`);
}
/* //animacion fadeout
let animateFadeout = document.getElementsByClassName("fadeout");
function fadeOut(){
    animateFadeout.classList.remove("animate__fadeIn");
    animateFadeout.classList.add("animate__fadeOut");
} */

// Agrega el escuchador de eventos de clic a cada elemento
document.getElementById('sage').addEventListener('click', handleAsistantClick );
document.getElementById('mark').addEventListener('click', handleAsistantClick );
document.getElementById('mentor').addEventListener('click', handleAsistantClick );
document.getElementById('arty').addEventListener('click', handleAsistantClick );
document.getElementById('sunny').addEventListener('click', handleAsistantClick );
document.getElementById('spark').addEventListener('click', handleAsistantClick );

let assistantSelected = sessionStorage.getItem('asistantSelected');
let chatIaName = document.getElementsByClassName('chatIa');

let assistantSelectedId = sessionStorage.getItem('asistantSelectedId');
let chatIaContainer = document.getElementsByClassName('chat-ia-container');


let userName = sessionStorage.getItem('userName');
let chatUserName = document.getElementsByClassName('chatUser');