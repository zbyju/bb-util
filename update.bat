@REM Update application
call git pull

@REM Install server
call cd server
call npm install

@REM Install client
call cd ../client
call npm install
call cd ..

@REM Restart BB-Util
call pm2 delete index
call set NODE_ENV=production&&pm2 start server/index.js
