$nodeFolder = Join-Path $PSScriptRoot "node-portable"
$nodeExe = Join-Path $nodeFolder "node.exe"
$npmCmd = Join-Path $nodeFolder "npm.cmd"

# Check if node portable is already downloaded
if (!(Test-Path $nodeExe)) {
    Write-Host "Node.js was not found on your system. Downloading portable Node.js v20..."
    $zipPath = Join-Path $PSScriptRoot "node.zip"
    
    # Download node zip
    [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
    Invoke-WebRequest -Uri "https://nodejs.org/dist/v20.11.0/node-v20.11.0-win-x64.zip" -OutFile $zipPath -UserAgent "Mozilla/5.0"
    
    Write-Host "Extracting zip archive..."
    Expand-Archive -Path $zipPath -DestinationPath $nodeFolder
    
    # Move files up from extracted folder
    $innerFolder = Get-ChildItem -Path $nodeFolder -Directory | Select-Object -First 1
    if ($innerFolder) {
        Get-ChildItem -Path $innerFolder.FullName | Move-Item -Destination $nodeFolder
        Remove-Item -Path $innerFolder.FullName -Recurse
    }
    Remove-Item -Path $zipPath
    Write-Host "Node.js portable setup completed!"
}

# Add node-portable to current session PATH
$env:PATH = "$nodeFolder;" + $env:PATH

# Install dependencies if node_modules don't exist
if (!(Test-Path (Join-Path $PSScriptRoot "node_modules"))) {
    Write-Host "Installing frontend dependencies..."
    & $npmCmd install
}

if (!(Test-Path (Join-Path $PSScriptRoot "server\node_modules"))) {
    Write-Host "Installing backend dependencies..."
    Push-Location (Join-Path $PSScriptRoot "server")
    & $npmCmd install
    Pop-Location
}

Write-Host "Starting servers..."
Write-Host "1. Starting Express backend on port 5000..."
# Start backend in a separate process
Start-Process -FilePath $nodeExe -ArgumentList "server.js" -WorkingDirectory (Join-Path $PSScriptRoot "server") -NoNewWindow

Write-Host "2. Starting Vite frontend on http://localhost:3000..."
# Start frontend dev server
& $npmCmd run dev
