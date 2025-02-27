// console.log(1)
// console.log('practicas')
// console.log('undefined')
// console.log(true)
// console.log(false)
// console.log([1, 2, 3])
// console.log({a:1,b:2,c:3})


// let nombre = 'Ismael'
// let edad = 35
// let precio = 5000
// let series = ['Prison Break', 'Lost', ]
// let peliculas = ['Pecados capitales', 'Gladiador', 'Matrix']

// console.log(nombre)
// console.log(edad)
// console.log(precio)
// console.log(series)
// console.log(peliculas)

// edad = edad + 1
// console.log(edad)

// series.push('Vikings')
// console.log()



// const mostrarLista = (array) => {
//     if(array.lenght === 0){
//         console.log('Lista Vacía')
//     }else{
//         array.forEach((item) => {
//             console.log(`item: ${item}`)
//         })
//     }
// }

// mostrarLista([1,2,3])






class Contador{
    constructor(nombre){
        this.nombre = nombre
        this.contador = 0
    }

    static contadorGlobal = 0

    getResponsable(){
        return console.log(`El responsable es: ${this.nombre} ${this.contador}`)
    }

    contar(){
        this.contador++
        Contador.contadorGlobal++
    }

    getCuentaIndividual(){
        return console.log(`El contador de ${this.nombre} es: ${this.contador}`)
    }

    static getCuentaGlobal(){
        return console.log(`El contador global es: ${Contador.contadorGlobal}`)
    }

}

const contador1 = new Contador('Ismael')
const contador2 = new Contador('Gonzalo')

contador1.getResponsable()
contador2.getResponsable()

contador1.contar()
contador1.contar()
contador2.contar()


console.log(contador1.getCuentaIndividual())
console.log(contador2.getCuentaIndividual())

console.log(Contador.getCuentaGlobal())