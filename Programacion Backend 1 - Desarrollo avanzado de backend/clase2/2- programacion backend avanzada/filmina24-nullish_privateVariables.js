
//El operador nullish difiera del operador || , ya que || también ignora valores falseys.

let variableDePrueba = 0   //Remplazar esta variable de prueba por diferentes valores null, undefined, falseys


let variableAsignable = variableDePrueba || 'sin valor'
console.log(variableAsignable)  //tal vez yo necesitaba el valor 0, pero al utilizar ||, se toma el valor por default

let variableConNullish = variableDePrueba ?? 'sin valor'
console.log(variableConNullish)  //Notamos que a este punto sí podemos tomar el valor 0 que necesitamos.

//Notamos que con Nullish realmente sólo nos interesa que el valor NO SEA undefined o null. Todo lo demás podemos asignarlo.




// Sobre variable privada

class Persona {
    #fullname   //Primero declaramos la variable antes del constructor para poder construirla con los valores del constructor
    constructor(nombre, apellido){
        this.nombre = nombre
        this.apellido = apellido
        this.#fullname = `${this.nombre} ${this.apellido}`  //asignamos el valor de la variable privada
    }
    //Esta variable la podemos utilizar de manera interna, no podemos acceder a ella por fuera.
    getFullName = () => {
        return this.#fullname  //La única forma en la cual podemos obtener el valor de esa variable privada es pidiéndole desde un método .
        //Permite utilizar variables, pero evitando que se puedan modificar desde fuera (por seguridad)
    }

    #metodoPrivado = () =>{  //También podemos declarar métodos privados, para que sólo sean usados dentro de la clase, y no llamados por fuera.
        //Aquí realizamos tareas que queremos que se ejecuten sólo de manera interna en la clase, no podemos mandar a llamar este método.
    }
}

let instancia1 = new Persona('Ismael', 'Vasconcel')

console.log(instancia1.getFullName())