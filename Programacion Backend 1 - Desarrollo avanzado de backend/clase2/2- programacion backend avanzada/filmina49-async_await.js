const dividir = (dividendo,divisor) => { 
    return new Promise((resolve,reject)=>{  //Al hacer una promise, estamos pasando dos parametros, resolve y reject
        if(divisor===0){
            reject('No se pueden hacer divisiones por cero')
            /*
            Rechazamos la operación porque no es posible dividir por cero, no puedo cumplirle al usuario la promera que le hice sobre dividir sus números.
            */
        }else{
            resolve(dividendo/divisor)
            /*
            Si los valores son válidos, entonces si puedo cumplir la promesa que hice al usuario de dividir sus números.
            */
        }
    })
}

const funcionAsincrona = async() => {
    // Estamos iniciando un entorno completamente asincrono, todo lo que está dentro de las llaves de la función se comportará no bloqueante con el esterior.
    try{
    //Encerramos la operación a realizar en un bloque try, porque al ser una promesa, PODRÍA NO CUMPLIRSE, así que hay que estar prevenidos 
        let resultado = await dividir(10,5) //Ya no hay .then , ahora solo ESPERAMOS por el resultado de la promesa.
        console.log(resultado)
    }
    catch(error){
        //El bloque catch es obligatorio después de un try{} y sirve igual que el .catch, para poder ATRAPAR errores.
        console.log(error)
    }
}

funcionAsincrona()