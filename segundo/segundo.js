const { ipcRenderer } = require('electron')

ipcRenderer.on('mensaje', (event, args)=>{

    document.getElementById('respuesta').innerHTML = args
})