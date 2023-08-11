const packager = require('electron-packager');

const options = {
    dir: './',
    name: 'Vue3ElectronTestApp',
    platform: 'win32', // win32/darwin
    arch: 'x64', // ia32/x64
    version: '2.0.1',
    out: './out-windows',
    // icon: './icon.ico',
    overwrite: true
};

packager(options);