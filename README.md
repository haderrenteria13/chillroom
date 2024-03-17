# Bienvenidos a ChillRoom 👋🏿
Aplicación web con diferentes tutores IA para resolver tus dudas!

Puedes visitar la aplicación [aquí](http://gabrieleht.pythonanywhere.com/).

![Codicon](https://github.com/haderrenteria13/chillroom/assets/106301008/c800c832-503a-4913-bf9a-496f6f64ef07)

## 🚀 Ejecución
Para ejecutar el proyecto en local debes hacer lo siguiente:

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
***NOTA: La ejecución de scripts en Powershell está desactivada por defecto, así que si te da error prueba a ejecutar `Set-ExecutionPolicy Unrestricted -Scope Process` y luego repite el paso 6***

7. Una vez activado el entorno virtual, instala las dependencias del proyecto con `pip install -r requirements.txt`.
8. También tienes que escargar [este archivo](https://www.mediafire.com/file/nt4yr1l6w3shso7/.env/file) y colocarlo dentro de la carpeta `backend`.
9. Ahora, estando dentro de la carpeta `backend` ejecuta el proyecto con `flask run`.

---
hecho con ❤️ por el equipo [CodeSlayers] 😊
