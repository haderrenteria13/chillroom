
for (let i = 0; i < chatIaName.length; i++) {
    chatIaName[i].innerText = `${assistantSelected}:`;
}

/* for (let i = 0; i < chatIaContainer.length; i++) {
    chatIaContainer[i].appendChild = `<img src="../static/${assistantSelectedId}.jfif" alt="${assistantSelectedId}" class="assistant-icon" >`;
} */
for (let i = 0; i < chatIaContainer.length; i++) {
    // Crear un elemento <img> y establecer sus atributos
    let imgElement = document.createElement('img');
    imgElement.src = `../static/${assistantSelectedId}.jfif`;
    imgElement.alt = assistantSelectedId;
    imgElement.className = 'assistant-icon';

    // Agregar el elemento <img> al contenedor sin reemplazar el contenido existente
    chatIaContainer[i].appendChild(imgElement);
}
for (let i = 0; i < chatUserName.length; i++) {
    chatUserName[i].innerText = `${userName}:`;
}
