// CONTINUACIÓN DE FILMINA 42


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


// Una vez creada nuestra promesa, es hora de utilizarla.

dividir(6,3) //llamamos la función como cualquier caso
.then(resultado => {
    console.log(resultado) //En este caso, al no ser división por 0, la promesa se cumplirá y el resultado será 2.
    //Programamos el .then para recibir cualquier "RESOLVE" por parte de la promesa (es decir, utilizamos then para recibir los casos en los cuales sabemos que la función va a salir bien) El parámetro "resultado" será el valor que devuelva el resolve de la promesa.
})
.catch(error => {
    console.log(error)
    //Programamos también un .catch para recibir cualquier "REJECT" por parte de la promesa (es decir, utilizamos .catch para ATRAPAR los errores que nos arroje la promesa, para poder entender la razón por la cual nuestra promesa no pudo cumplirse correctamente), el parámetro "error" será el valor que devuelva el reject dentro de la promesa.
})



//OTRO EJEMPLO


dividir(5,0)
.then(resultado=>{
    console.log(resultado)
})
.catch(error=>{
    console.log(error)
    //En este caso, como el divisor es cero, la promesa no podrá resolverse y entrará en este bloque .catch, indicando la razón por la cual no pudo devolverse dicha promesa. De esta manera, tenemos el control sobre los casos donde todo salga bien, pero TAMBIÉN controlamos los casos donde algo salga mal.
})