let userName = sessionStorage.getItem("userName");

document.getElementById("title-user").innerText = userName;

// Función para manejar los eventos de clic y almacenar el ID en sessionStorage
function handleAsistantClick(event) {
    const clickedIA = event.target.innerText;
    sessionStorage.setItem('asistantSelected', clickedIA);
    console.log(`ID clickeado: ${clickedIA} almacenado en sessionStorage.`);
}

// Agrega el escuchador de eventos de clic a cada elemento
document.getElementById('sage').addEventListener('click', handleAsistantClick);
document.getElementById('mark').addEventListener('click', handleAsistantClick);
document.getElementById('mentor').addEventListener('click', handleAsistantClick);
document.getElementById('arty').addEventListener('click', handleAsistantClick);
document.getElementById('sunny').addEventListener('click', handleAsistantClick);
document.getElementById('spark').addEventListener('click', handleAsistantClick);