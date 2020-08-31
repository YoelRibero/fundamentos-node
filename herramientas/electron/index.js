const { app, BrowserWindow } = require('electron');

let mainWindow;

app.on('ready', createWindow) // Cuando este listo disparará la función

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  })
  mainWindow.loadFile('index.html')
}
