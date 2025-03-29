const fs = require('fs')

const moment = require('moment')

const fechaYHoraActual = moment().format('MMMM Do YYYY, h:mm:ss a')

fs.writeFile('./fecha_y_hora.txt', fechaYHoraActual, (error)=>{
    if(error) return console.log('Error al escribir el archivo')
    fs.readFile('./fecha_y_hora.txt','utf-8',(error,respuesta)=>{
        if(error) return console.log('No se pudo leer el archivo.')
        
        console.log(respuesta)
    })
})