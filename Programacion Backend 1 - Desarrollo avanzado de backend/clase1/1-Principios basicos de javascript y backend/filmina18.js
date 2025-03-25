class Persona{
    constructor(nombre){
        this.nombre = nombre
    }

    static especie = 'humano'

    saludar(){
        console.log(`Hola, soy ${this.nombre}. Mucho gusto!`)
    }

    getEspecie(){
        console.log(`Aunque no lo creas soy ${Persona.especie}`)
    }
}

let persona1 = new Persona('Ismael')
let persona2 = new Persona('Vero')
persona1.saludar()
persona1.getEspecie()
persona2.saludar()
persona2.getEspecie()