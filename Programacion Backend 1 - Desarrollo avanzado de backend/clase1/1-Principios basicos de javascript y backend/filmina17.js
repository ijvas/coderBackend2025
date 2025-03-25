// Funciones - Filmina 17

const mostrarLista = (array) => {
    if(array.length == 0){
        console.log('Lista vacía')
    }else if(array.length > 0){
        array.forEach( e => console.log(e));
        console.log(`El largo de la lista es ${array.length}`)
    }
}

let letras = []


mostrarLista(letras)