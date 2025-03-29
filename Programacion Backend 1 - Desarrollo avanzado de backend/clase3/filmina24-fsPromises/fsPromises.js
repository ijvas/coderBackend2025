const fs = require('fs')

const operacionesAsincronas = async () =>{  //Nota que la función debe ser asíncrona porque trabajamos con promesas.
    //Escribimos un archivo
    await fs.promises.writeFile('./ejemploPromesa.txt', 'Hola desde promesa!')
    //Utilizar el módulo de promises nos facilita la operación para no requerir estar dentro de un callback.

    let resultado = await fs.promises.readFile('./ejemploPromesa.txt', 'utf-8')
    console.log(resultado)

    //Modificamos el archivo
    await fs.promises.appendFile('./ejemploPromesa.txt', 'Contenido adicional')

    //Releemos el archivo
    resultado = await fs.promises.readFile('./ejemploPromesa.txt','utf-8')
    console.log(resultado)

    //finalmente, borramos el archivo
    await fs.promises.unlink('./ejemProme.txt')
}

operacionesAsincronas()
//Tenemos un código mucho más limpio, mucho más simple y mucho más entendible.
