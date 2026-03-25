@echo off
setlocal enabledelayedexpansion

echo Starting Fruitfulbox Platform services...

start "Backend" powershell -NoExit -Command "cd backend & npm run dev"
start "Admin" powershell -NoExit -Command "cd admin & npm run dev"
start "Frontend" powershell -NoExit -Command "cd frontend & npm run dev"

echo.
echo All services started!
echo Frontend: http://localhost:3000
echo Admin: http://localhost:3000/admin
pause
