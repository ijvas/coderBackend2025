// Usaremos el arreglo de prueba
let arregloDePrueba = [1,2,3,4,5]


const miFuncionMap = (arreglo, callback) => {
    let nuevoArreglo = []
    for (let i=0; i<arreglo.length; i++){
        let nuevoValor = callback(arreglo[i])  //Nota como, el callback que recibí arriba lo estoy ejecutando en este punto.       
        nuevoArreglo.push(nuevoValor)
    }
    return nuevoArreglo
}

// pongamos en comparación nuestra nueva función CON UN CALLBACK y la función map

let nuevoArregloPropio = miFuncionMap(arregloDePrueba, x=>x*2)  //El nuevo arreglo será [2,4,6,8,10]
let nuevoArregloConMap = arregloDePrueba.map(x=>x*2)   //Resultado: [2,4,6,8,10]

//Nota que no hay diferencia. Acabamos de recrear la función map para entender sun funcionamiento interno y viendo DONDE está utilizando el callback que enviamos como parámetro.




//EXTRA: Si queremos que la función se ejecute sobre el mismo arreglo y no tener que pasarlo como parámetro, debemos agregar nuestra nueva función en el prototipo del objeto array.

Array.prototype.miPropiaFuncionMap = function(callback){
    let nuevoArreglo = []
    for(let i=0; i<this.length;i++){
        let nuevoValor = callback(this[i])
        nuevoArreglo.push(nuevoValor)
    }
    return nuevoArreglo
}

let arregloPrueba = [1,2,3,4,5]
let nuevosValores = [arregloPrueba.miPropiaFuncionMap(x=>x+1)]