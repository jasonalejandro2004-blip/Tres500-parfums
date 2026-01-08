# Script para inicializar repo Git y hacer push a GitHub
# Uso: .\git-publish.ps1

param(
    [string]$RemoteUrl
)

if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host "Git no está instalado o no está en PATH. Instálalo desde https://git-scm.com/." -ForegroundColor Red
    Exit 1
}

if (-not $RemoteUrl) {
    $RemoteUrl = Read-Host "Introduce la URL remota del repo (ej: https://github.com/tu_usuario/tres500-parfums.github.io.git)"
}

Write-Host "Inicializando git y preparando push a: $RemoteUrl" -ForegroundColor Cyan

# Inicializar repo si no existe
if (-not (Test-Path .git)) {
    git init
}

# Asegurar rama main
try { git checkout -B main } catch { }

git add .

# Commit - si no hay cambios no fallará
try {
    git commit -m "Initial site commit for Tres500 Parfums" -q
} catch {
    Write-Host "No hay cambios nuevos para commitear o ya existe un commit." -ForegroundColor Yellow
}

# Añadir remote (reemplaza o actualiza)
$existing = git remote get-url origin 2>$null
if ($existing) {
    Write-Host "Remote 'origin' ya existe: $existing" -ForegroundColor Yellow
    $useExisting = Read-Host "¿Deseas sobrescribir la URL de 'origin' con $RemoteUrl? (s/n)"
    if ($useExisting -eq 's') {
        git remote remove origin
        git remote add origin $RemoteUrl
    }
} else {
    git remote add origin $RemoteUrl
}

Write-Host "Haciendo push a main..." -ForegroundColor Cyan
try {
    git push -u origin main
    Write-Host "Push completado. Verifica https://tres500-parfums.github.io" -ForegroundColor Green
} catch {
    Write-Host "Push falló. Puede necesitar autenticación interactiva (usa 'gh auth login' o un token)." -ForegroundColor Red
}
