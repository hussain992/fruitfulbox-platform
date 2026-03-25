$ErrorActionPreference = "Stop"

Write-Host "Starting Fruitfulbox Platform services..." -ForegroundColor Cyan

# Start Backend
Write-Host "Starting Backend..." -ForegroundColor Yellow
Start-Process -NoNewWindow -FilePath "powershell" -ArgumentList "-NoExit", "-Command", "cd backend; npm run dev"

# Start Admin
Write-Host "Starting Admin..." -ForegroundColor Yellow
Start-Process -NoNewWindow -FilePath "powershell" -ArgumentList "-NoExit", "-Command", "cd admin; npm run dev"

# Start Frontend
Write-Host "Starting Frontend..." -ForegroundColor Yellow
Start-Process -NoNewWindow -FilePath "powershell" -ArgumentList "-NoExit", "-Command", "cd frontend; npm run dev"

Write-Host "All services started!" -ForegroundColor Green
Write-Host "Frontend: http://localhost:3000" -ForegroundColor Cyan
Write-Host "Admin: http://localhost:3000/admin" -ForegroundColor Cyan
Write-Host "Backend: Check terminal for port" -ForegroundColor Cyan
