const fs = require('fs')


fs.writeFileSync('./ejemplo.txt', 'Hola Coders! Estoy en un archivo!')


//Primer operación: Para escribir un archivo, el primer argumento/parámetro es la ruta y nombre del archivo sobre el que queremos trabajar. El segundo argumento es el contenido.

if(fs.existsSync('./ejemplo.txt')){    //existsSync devuelve true si el archivo existe, sino, false.
    let contenido = fs.readFileSync('./ejemplo.txt', 'utf-8')

    console.log(contenido)  //Resultado: Hola Coders! Estoy en un archivo!

    fs.appendFileSync('./ejemplo.txt', 'Más contenido')
    //appendFileSync buscará primero la ruta del archivo, si no encuentra ningún archivo, lo creará, en caso de si encontarlo, en lugar de sobreescribir todo el archivo, solo colocará el contenido al final.


    contenido = fs.readFileSync('./ejemplo.txt', 'utf-8')
    //Volvemos a leer el contenido del archivo
    console.log(contenido)
    //Esta vez el resultado será: "Hola Coders! Estoy en un archivo! Mas contenido" Gracias al appendFileSync


    fs.unlinkSync('./ejemplo.txt')
    //Por último, ésta línea de código eliminará el archivo, independientemente del contenido que tenga.
}