// Electron starter point
import electron, {app, BrowserWindow} from 'electron';

app.on('ready', () => {
  let appWindow;
  appWindow = new BrowserWindow();
  appWindow.loadURL(`file://${__dirname}/index.html`);
});