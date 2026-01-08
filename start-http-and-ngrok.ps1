# Start local HTTP server (port 8000) and ngrok tunnel, then copy public URL to clipboard
# Usage:
# 1) Download ngrok.exe from https://ngrok.com and place ngrok.exe in this project folder (or ensure ngrok is in PATH).
# 2) Authenticate ngrok once: `ngrok authtoken <your-token>` in a terminal.
# 3) From PowerShell run (may need to allow script execution for this session):
#    Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
#    .\start-http-and-ngrok.ps1

$projectDir = Split-Path -Parent $MyInvocation.MyCommand.Definition
Push-Location $projectDir

Write-Host "Starting local HTTP server on port 8000..." -ForegroundColor Cyan
$pythonProc = Start-Process -FilePath python -ArgumentList '-m','http.server','8000' -WindowStyle Hidden -PassThru
Start-Sleep -Seconds 1

# Start ngrok (expects ngrok.exe in the same directory or in PATH)
$ngrokExe = Join-Path $projectDir 'ngrok.exe'
if (-Not (Test-Path $ngrokExe) -and -Not (Get-Command ngrok -ErrorAction SilentlyContinue)) {
    Write-Host "ngrok not found. Please download ngrok.exe and put it in this folder, or add ngrok to PATH." -ForegroundColor Red
    Exit 1
}

Write-Host "Starting ngrok tunnel for http://localhost:8000 ..." -ForegroundColor Cyan
if (Test-Path $ngrokExe) {
    $ngrokProc = Start-Process -FilePath $ngrokExe -ArgumentList 'http','8000' -WindowStyle Hidden -PassThru
} else {
    $ngrokProc = Start-Process -FilePath 'ngrok' -ArgumentList 'http','8000' -WindowStyle Hidden -PassThru
}

# Wait for ngrok to create the tunnel and its local API to be available
$apiUrl = 'http://127.0.0.1:4040/api/tunnels'
$maxTries = 15
$try = 0
$tunnelUrl = $null
while ($try -lt $maxTries -and -not $tunnelUrl) {
    Start-Sleep -Seconds 1
    try {
        $resp = Invoke-RestMethod -Uri $apiUrl -Method Get -ErrorAction Stop
        if ($resp.tunnels -and $resp.tunnels.Count -gt 0) {
            # prefer https tunnel if available
            $tunnel = $resp.tunnels | Where-Object { $_.public_url -like 'https:*' } | Select-Object -First 1
            if (-not $tunnel) { $tunnel = $resp.tunnels[0] }
            $tunnelUrl = $tunnel.public_url
        }
    } catch {
        # ignore and retry
    }
    $try++
}

if ($tunnelUrl) {
    Write-Host "ngrok public URL:" -ForegroundColor Green
    Write-Host $tunnelUrl -ForegroundColor Yellow
    try { Set-Clipboard -Value $tunnelUrl; Write-Host "URL copiada al portapapeles." -ForegroundColor Green } catch { }
    Write-Host "Share this URL on any device to access the site." -ForegroundColor Cyan
    Write-Host "When finished, press Enter to stop the server and ngrok." -ForegroundColor Cyan
    Read-Host | Out-Null
} else {
    Write-Host "No se encontró túnel ngrok. Revisa que ngrok esté autenticado y ejecutándose." -ForegroundColor Red
}

# Cleanup
if ($ngrokProc) { Stop-Process -Id $ngrokProc.Id -ErrorAction SilentlyContinue }
if ($pythonProc) { Stop-Process -Id $pythonProc.Id -ErrorAction SilentlyContinue }

Pop-Location
