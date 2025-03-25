const dividir = (dividendo, divisor) => {
    return new Promise((resolve,reject)=>{ //Nota que al crear una promise, estamos pasando un callback con dos parámetros: resolve, reject
        if(divisor === 0){
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