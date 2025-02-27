// Ejemplo de uso de Object.entries, Object.keys, Object.values
const impuestos = {
    impuesto1: 2341,
    impuesto2: 341,
    impuesto3: 4611,
    impuesto4: 111
}

let parLlaveValor = Object.entries(impuestos)

console.log(parLlaveValor) //resultado: [ [impuesto1,2341], [impuesto2, 341], [impuesto3,4611], [impuesto4, 111] ]
//Notamos como Object.entries obtiene en arreglos individuales la propiedad con su valor, en caso de que necesitemos usarlas por separado.



let soloPropiedades = Object.keys(impuestos)
console.log(soloPropiedades) //resultado: [impuesto1,impuesto2,impuesto3,impuesto4]
// Con Object.key podemos obtener solo las propiedades del objeto, sin necesidad de su valor, este método es MUY ÚTIL en códigos profesionales, sin embargo, por cuestiones de complejidad se aboradará en elementos prácticos más adelante.



let soloValores = Object.values(impuestos)
console.log(soloValores)  //resultado: [2341,341,4611,111]
//Capturamos solo los valores del objeto con Object.values y luego los usamos para obtener un total de impuestos con el metodo .reduce()

let impuestosTotales = soloValores.reduce( (valorInicial, valorAcumulado) => valorAcumulado + valorInicial)
console.log('impuestos totales: ' + impuestosTotales) //resultado: 7404, total de todos los impuestos.