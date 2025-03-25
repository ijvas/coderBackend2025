class Contador{
    constructor(nombre){
        this.nombre = nombre
        this.contador = 0
    }

    static contadorGlobal = 0

    getResponsable(){
        console.log(`El responsable de esta cuenta es ${this.nombre}`)
        console.log('')
    }

    contar(){
        this.contador++
        console.log(`Se ha añadido una cuenta a la cuenta de ${this.nombre}.`)
        Contador.contadorGlobal++
        console.log('Se ha añadido una cuenta al contador global.')
        console.log('')
    }

    getCuentaIndividual(){
        console.log(`La cuenta de ${this.nombre} da ${this.contador}`)
        console.log('')
    }

    getCuentaGlobal(){
        console.log(`La cuenta global da la suma de ${Contador.contadorGlobal}`)
        console.log('')
    }

}

let persona1 = new Contador('Ismael')
let persona2 = new Contador('Vero')

persona1.getResponsable()
persona1.contar()
persona1.contar()
persona1.contar()
persona1.getCuentaIndividual()

persona2.getResponsable()
persona2.contar()
persona2.getCuentaIndividual()

persona1.getCuentaGlobal()

