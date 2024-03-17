# chillroom
Aplicación web de tutor de IA para distintos temas

## Ejecución
Para ejecutar el proyecto debes hacer lo siguiente:

1. Primero, debes de tener [Python](https://www.python.org/downloads/) instalado.
2. Luego, debes clonar este repositorio usando el comando `git clone https://github.com/haderrenteria13/chillroom.git`.
3. Abre una terminal de comandos y entra en la carpeta `backend` dentro del proyecto.
4. Asegúrate de tener `pip` instalado en tu sistema:
```sh
# En Powershell
py -m ensurepip --upgrade
# En bash
python3 -m ensurepip --upgrade
```
5. Crea un entorno virtual de Python usando el módulo `venv`:
```sh
# En Powershell
py -m venv .venv
# En bash
python3 -m venv .venv
```
6. Ahora activa el entorno virtual:
```sh
# En Powershell
.venv/Scripts/activate.ps1
# En bash
source .venv/bin/activate
```
7. Una vez activado el entorno virtual, descarga [este archivo](https://www.mediafire.com/file/nt4yr1l6w3shso7/.env/file) y colócalo dentro de la carpeta `backend`.
8. Ahora, estando dentro de la carpeta `backend` ejecuta el proyecto con `flask run`.
