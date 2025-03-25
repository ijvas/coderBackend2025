// Dados los siguientes objetos

let objeto1 = {
    propiedad1: 2,
    propiedad2: 'b',
    propiedad3: true
}

let objeto2 = {
    propiedad1: 'c',
    propiedad2: [2,3,5,6,7]
}



//SPREAD OPERATOR nos sirve para hacer una destructuración del objeto, para poder utilizar sólo las propiedades que queremos.

let {propiedad1, propiedad2} = objeto1 //Tomamos el objeto1 y lo "rompemos" para obtener sólo las props que queremos.

let objeto3 = {...objeto1, ...objeto2} //Spread operator también se puede usar para vaciar las propiedades de un objeto en otro objeto nuevo.

console.log(objeto3)  //resultado: {propiedad1: 'c', propiedad2: [2,3,5,6,7], propiedad3 = true } 
//Notemos como, si dos elementos comparten el mismo nombre de propiedad, se superponen, por lo que propiedad1 y propiedad2 del objeto1 ya no existen dentro del objeto3, sino que fueron "superpuestos" por propiedad1 y propiedad2 del objeto2.




//RESTO OPERATOR nos servirá para obtener un objeto SÓLO con las propiedades RESTANTES del objeto que hayamos destructurado, por ejemplo: 

let objeto4 = {
    a: 1,
    b: 2,
    c: 3
}

let {a, ...rest} = objeto4  //Indicamos que queremos trabajar con la propiedad a, y guardar en un objeto el resto de las propiedades de ese objeto, en caso de que los necesitemos mas adelante.

console.log(rest)

