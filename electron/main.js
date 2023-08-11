const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')
const { SerialPort: Port } = require('serialport')

// 查询串口列表
Port.list().then(ports => {
    console.log('portList:', ports)
}, err => {
    console.error(err)
});

// 打开串口
const port = new Port({
    path: 'COM2',
    dataBits: 8, // 数据位
    stopBits: 1, // 停止位
    parity: "none", // 奇偶校验
    baudRate: 9600, // 波特率
});
port.open(() => {
    // 接收数据
    port.on("data", data => {
        console.log('COM1->Com2 data:', data.toString())
    });
});

// 关闭串口
// port.close();

// 发送数据
// port.write(Buffer.from("data"), () => {
//
// });

let mainWindow

function createWindow() {
    //创建窗口
    mainWindow = new BrowserWindow({
        height: 900,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            webSecurity: false,
            nodeIntegration: true,
        },
        backgroundColor: '#FFF',
        darkTheme: false,
        title: 'My App',
        width: 1700,
        frame: true,
        minWidth: 1300,
        minHeight: 900
    });
    if (process.env.NODE_ENV === 'development') {
        // 开发环境
        // 加载页面并打开调试工具,根据 NODE_ENV
        // umijs 在dev时会给出相应的url，直接加载即可
        mainWindow.loadURL('http://localhost:8080/');
        mainWindow.webContents.openDevTools();
    } else {
        //生产环境
        // 加载html文件
        // 这里的路径是umi输出的html路径，如果没有修改过，路径和下面是一样的
        mainWindow.loadURL(
            url.format({
                pathname: path.join(__dirname, './dist/index.html'),
                protocol: 'file:',
                slashes: true,
            }),
        );
    }
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

app.on('ready', () => {
    createWindow();

    app.on('activate', function () {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
