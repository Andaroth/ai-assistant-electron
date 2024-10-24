// main.js 
// ChatGPT Electron 
// by Andaroth 
// https://github.com/Andaroth/chatgpt-electron
const { app, BrowserWindow, session } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: false,
    frame: true,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false,
      session: require('electron').session.defaultSession
    }
  });

  win.webContents.session.webRequest.onBeforeSendHeaders((details, callback) => {
    // ChatGPT might reject your session and loop on a captcha, if needed fix with UA:
    // details.requestHeaders['User-Agent'] = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36';
    callback({ cancel: false, requestHeaders: details.requestHeaders });
  });

  session.defaultSession.cookies.on('changed', (event, cookie, cause, removed) => {
    // You can manage your sessions in this callback
    if (!removed) console.log('Cookie ajouté/activé : ', cookie);
  });

  win.loadURL('https://chat.mistral.ai/chat');
}

// Uncomment lines depending on your local setup:
// app.disableHardwareAcceleration();
// app.commandLine.appendSwitch('use-angle', 'gl');
// app.commandLine.appendSwitch('use-gl', 'swiftshader');
app.commandLine.appendSwitch('disable-software-rasterizer');

app.whenReady().then(createWindow);
