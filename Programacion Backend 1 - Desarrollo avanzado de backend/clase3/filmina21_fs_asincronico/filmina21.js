const fs = require('fs')


fs.writeFile('./ejemploCallBack.txt', 'Hola desde callback', (error)=>{
    //Notemos que el ejemplo es similar, el detalle es que ahora estamos metiendo un callback para preguntar si algo salió mal durante la operación de escritura del archivo.

    if(error) return console.log('Error al escribir el archivo') //Pregunto si el error del callback existe

    fs.readFile('./ejemploCallBack.txt', 'utf-8', (error, resultado)=>{
        //Los mismos argumentos del readFileSync, sólo que esta vez al final colocamos un callback, donde el primer argumento/parámetro sirve para saber si hubo algún error al leer el archivo, el segundo parámetro es el resultado de esa lectura.

        if(error) return console.log('Error al leer el archivo') //Nota que cada callback es conciente de su propio error.
        console.log(resultado)

        fs.appendFile('./ejemploCallBack.txt', 'Mas contenido', (error)=>{
            //Hasta este punto debes estar preocupandote... Estoy armando un callback hell?
            //Mucho cuidado cuando trabajes con callbacks y con archivos!

            if(error) return console.log('Error al actualizar el archivo') //Preguntamos si hubo error en el append.
            fs.readFile('./ejemploCallBack.txt', 'utf-8', (error, resultado)=>{
                //Volvemos a leer archivo para corroborar el nuevo cambio.
                if(error) return console.log('Error al leer el archivo')
                console.log(resultado) //Si todo salió bien el resultado debe ser: "Hola desde callback Mas contenido"
                fs.unlink('./ejemcallb.txt', (error)=>{
                    if(error) return console.log('No se pudo eliminar el archivo')
                })
            })
        })
    })

})

