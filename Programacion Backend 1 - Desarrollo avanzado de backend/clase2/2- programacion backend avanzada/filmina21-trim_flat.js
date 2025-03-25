let cadena1 = `                         hola`  //El mensaje no debería enviarse de esa manera ya que consume espacio innecesario al almacenar.
console.log(cadena1.trim())    //resultado: 'hola'

//Podemos validar también si me enviaron un mensaje vacío, para saber si almacenarlo o no enviar el mensaje (simulando un chat)

let mensajes = []

let intentoDeMensaje = `      hola como va            `

if(intentoDeMensaje.trim().length>0){   //Por lo menos hay un caracter(no espacio) para enviar al usuario, entonces es un mensaje válido.
    mensajes.push(intentoDeMensaje.trim())
    console.log('mensaje enviado', mensajes)
}else{  //silacondición entra en else, es porque el mensaje venía vacío y por lo tanto no deberíamos guardarlo ni enviarlo al otro usuario
    console.log('Mensaje vacío, para poder enviar un mensaje, por favor escriba algo')
}

/*
    Sin el método trim, permitimos muchas brechas de seguridad al momento de querer procesar cadenas de texto,
    de modo que es bueno limitarlas a un formato que dominemos (sin espacios extras ni cadenas aparentemente
    vacías)
*/

//Uso de flat

let arrayAnidado = [1, 32, 4, 5, 6, [1, 4, 5, 1], [3411, 3, 4]]  //Anteriormente, para poder entender los valores internos de cada arreglo, usábamos una técnica llamada 'Recursividad', esta vez es más sencillo.

console.log(arrayAnidado.flat()) //resultado: [1, 32, 4, 5, 6 , 1, 4, 5, 1, 3411, 3, 4], notamos que ya no hay más anidación y podemos manejarlos mejor.