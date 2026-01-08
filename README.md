# Tres500 Parfums

Sitio estático listo para publicar en GitHub Pages.

## Abrir en Visual Studio Code
1. Abre VS Code.
2. `File > Open Folder` y selecciona la carpeta del proyecto `pagiona web version 2`.

## Ejecutar localmente
Desde PowerShell en la carpeta del proyecto:

```powershell
# Inicia servidor HTTP (puerto 8000)
python -m http.server 8000
```
Luego abre `http://localhost:8000` en tu navegador.

También hay un helper PowerShell para iniciar el servidor y crear un túnel público con ngrok:

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
.\start-http-and-ngrok.ps1
```
(Sigue las instrucciones en ese script; necesitas ngrok instalado y autenticado).

## Publicar en GitHub Pages (pasos rápidos)
Si ya creaste el repo `tres500-parfums.github.io` en GitHub, puedes usar el script `git-publish.ps1` para inicializar y subir el proyecto.

1. Abre PowerShell en la carpeta del proyecto.
2. Ejecuta:

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
.\git-publish.ps1
```

El script te pedirá la URL del remoto (ej: `https://github.com/tu_usuario/tres500-parfums.github.io.git`) y hará `git init`, `add`, `commit` y `push` a la rama `main`.

> Nota: si GitHub solicita autenticación, usa `gh auth login` o crea un Personal Access Token y proporciónalo cuando se te pida la contraseña.

## Metadatos para compartir
La página incluye meta tags Open Graph (`og:title`, `og:description`) para que al compartir se muestre "Tres500 Parfums".

## Estructura importante
- `index.html` — página principal
- `styles.css` — estilos
- `script.js` — lógica y rutas de imágenes
- `imagenes-productos/` — coloca aquí los archivos de imagen locales
- `start-http-and-ngrok.ps1` — ayuda para crear una URL pública temporal con ngrok
- `git-publish.ps1` — script para inicializar y publicar al repo remoto

Si quieres, puedo ejecutar el script de publicación por ti desde aquí (necesitaré la URL remota o que autorices el `gh` CLI en tu máquina).