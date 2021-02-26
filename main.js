const {app, BrowserWindow} = require('electron')
const { ipcMain } = require('electron')

let ventana
function ventanaPrincipal(){


        ventana = new BrowserWindow({

        width: 346,
        height: 200,
        webPreferences: ({
            nodeIntegration: true

        })

    })

    ventana.loadFile('./formulario/formulario.html')
}

let ventana2
function ventanaSecundaria(){


        ventana2 = new BrowserWindow({

        width: 346,
        height: 200,
        webPreferences: ({
            nodeIntegration: true

        })

    })

    ventana2.loadFile('./segundo/segundo.html')
}

app.whenReady().then(ventanaPrincipal)

ipcMain.on('error-formulario', function(event, args){
    //console.log(event)
    //console.log(args)
    var lineas = parseInt(args)
    var alto = 200 + (lineas * 14)
    ventana.setSize(400, alto)

})

ipcMain.on('formulario-valido', (event, args) => {

    ventana.setSize(400, 200)
    console.log(args)
    //event.reply('respuesta', 'Formulario Ok')
    ventanaSecundaria()
    ventana2.webContents.on('did-finish-load', ()=> {
    ventana2.webContents.send('mensaje', args)
    })
    
})