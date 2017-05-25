// Electron starter point
import electron, {app, BrowserWindow, Menu, Tray} from 'electron';
import path from 'path';

// let mainWindow;

const createWindow = () => {
  let mainWindow = new BrowserWindow({
    show: false,
    width: 1024,
    height: 728
  });
  
  // // MENU
  // const name = app.getName();
  // const template = [
  //   {
  //     label: name,
  //     submenu: [{
  //       label: `About ${name}`,
  //       click: () => {console.log("clicked!")},
  //       role: 'about'
  //     }, {
  //       type: 'separator'
  //     }, {
  //       label: "Quit",
  //       click: () => {app.quit()},
  //       accelerator: 'Cmd+Q'
  //     }]
  //   }
  // ];
  // const menu = Menu.buildFromTemplate(template);
  // Menu.setApplicationMenu(menu);
  // // END MENU
  
  // // TRAY
  // const tray = new Tray(path.join('src', 'images', 'avatar.png'));
  // const contextMenu = Menu.buildFromTemplate([
  //   {
  //     label: 'Wow',
  //     click: () => console.log("wow")
  //   }
  // ]);
  //
  // tray.setContextMenu(contextMenu);
  // tray.setToolTip('Backgammon Ranking List');
  // // END TRAY
  
  mainWindow.loadURL(`file://${__dirname}/index.html`);
    
  mainWindow.on('ready-to-show', () => {
    mainWindow.show();
  });
  
  mainWindow.on('close', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  // Respect the OSX convention of having the application in memory even
  // after all windows have been closed
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// app.on('activate', () => {
//   // re-create the mainWindow if the dock icon is clicked in OS X and no other
//   // windows were open
//   if (! mainWindow) {
//     createWindow();
//   }
// });