@REM Install pm2
call npm install pm2 -g

@REM Create link and move it to the desktop
call mklink "Babybox" "startup.bat"
call move "Babybox" "%userprofile%\desktop\Babybox"

@REM Create link and move it to the startup folder
call mklink "Babybox" "startup.bat"
call move "Babybox" "%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\Babybox"

@REM Install server
call cd server
call npm install

@REM Install client
call cd ../client
call npm install
