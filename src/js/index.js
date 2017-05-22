import electron from 'electron';
const {app, BrowserWindow} = electron;

app.on('ready', () => {
  let appWindow;
  appWindow = new BrowserWindow();
  appWindow.loadURL("http://www.google.com");
});