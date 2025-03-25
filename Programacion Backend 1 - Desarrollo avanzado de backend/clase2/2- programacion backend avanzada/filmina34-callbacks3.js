const sumar = (numero1, numero2) => numero1 + numero2
const restar = (numero1, numero2) => numero1 - numero2
const multiplicar = (numero1, numero2) => numero1 * numero2
const dividir = (numero1, numero2) => numero1 / numero2

const realizarOperacion = (numero1,numero2,callback) => {
    console.log('Voy a realizar una operación, no se cuál, pero lo haré!')
    let resultado = callback(numero1,numero2)
    //No sabemos cuál de las cuatro operaciones será, pero eso a nosotros no nos importa, nosotros solo la ejecutamos y devolvemos el resultado.
    console.log(`El resultado de la operación que no supe cual fué es: ${resultado}`)
}


realizarOperacion(2,5,sumar)  //El resultado de la operación que nunca supe cual fue: 7
realizarOperacion(2,5,restar) //El resultado de la operación que nunca supe cual fue: -3
realizarOperacion(2,5,multiplicar) //El resultado de la operación que nunca supe cual fue:10
realizarOperacion(2,5,dividir) //El resultado de la operación que nunca supe cual fue: 0.4

//Analicemos, realizarOperación recibe una función de callback y la ejecuta por dentro, peroo... ¡no tiene idea de qué hace la función, sólo la ejecuta! Así que hay que tener siempre mucho cuidado de lo que pasamos por callback, ya que en caso de pasar una función que no sea compatible con los valores que esté trabajando la función, podríamos romper el código al cual le pasamos el callback.