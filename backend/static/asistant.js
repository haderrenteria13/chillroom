document.getElementById("title-user").innerText = sessionStorage.getItem('userName');

function handleAsistantClick(event) {
    const clickedIAText = event.target.innerText;
    const clickedIAid = event.target.id;

    sessionStorage.setItem('assistantSelected', clickedIAText);

    sessionStorage.setItem('assistantSelectedId', clickedIAid);

    console.log(`ID clickeado: ${clickedIAid}`);
    console.log(`ID clickeado: ${clickedIAText}`);
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
