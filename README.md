# Tres500 Parfums — Sitio estático

Este repositorio contiene un sitio estático (HTML/CSS/JS) listo para publicarse en GitHub Pages, Netlify o Vercel.

Guía rápida de despliegue

- GitHub Pages (opción simple):
  1. Ve a la configuración del repositorio > Pages.
  2. Selecciona la rama `main` (o `master`) y la carpeta `/ (root)` como fuente.
  3. Guarda. GitHub servirá `index.html` automáticamente.

- GitHub Pages (despliegue automático mediante Action):
  - Este repositorio incluye una GitHub Action que despliega el contenido del repositorio a la rama `gh-pages` cuando haces push a `main` o `master`.
  - No se requiere token adicional; la acción usa `GITHUB_TOKEN` automáticamente.

- Netlify / Vercel:
  - Conecta el repositorio desde el panel de Netlify o Vercel; ellos detectan sitio estático y publican automáticamente.
  - También puedes arrastrar la carpeta al panel de Netlify (Drag & Drop).

Consejos para que el sitio funcione correctamente

- Mantén las rutas a `styles.css`, `script.js` e imágenes en rutas relativas (ya configuradas).
- Asegúrate de subir la carpeta `imagenes-productos/` con las imágenes usadas.
- Si tienes nombres de archivos con espacios o caracteres raros, renómbralos con guiones o guiones bajos.

Previsualización local

Usa un servidor local simple para ver el sitio:

```powershell
# con Python 3
python -m http.server 8000
# o con npm
npx serve .
```

Si quieres que yo también despliegue o ajuste algo (favicon, SEO, rutas), dime qué modificar y lo hago.# Tres500 Parfums

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