// Electron starter point
import electron, {app, BrowserWindow} from 'electron';

app.on('window-all-closed', () => {
  // Respect the OSX convention of having the application in memory even
  // after all windows have been closed
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {
  let mainWindow = new BrowserWindow({
    show: false,
    width: 1024,
    height: 728
  });
  
  mainWindow.loadURL(`file://${__dirname}/index.html`);
    
  mainWindow.on('ready-to-show', () => {
    mainWindow.show();
  });
});