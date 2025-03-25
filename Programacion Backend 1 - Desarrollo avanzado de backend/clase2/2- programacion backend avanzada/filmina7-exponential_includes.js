//Exponential ** permite hacer el equivalente de la operación Math.pow(base,exp), para elevar un valor base a un exponente dado.
let valoresBase = [1,2,3,4,5,6] //Tenemos un conjunto de valores base
let nuevosValores = valoresBase.map( (numero, indice)=>numero**indice)
console.log(nuevosValores) //resultado: [1, 2, 9, 64, 625, 7776]

//Includes: Corrobora si algún elemento existe dentro del arreglo.

let nombres = ['Juan', 'Camilo', 'Maria', 'Ana', 'Humberto']

if(nombres.includes('Camilo')){                        //Includes devolverá true o false.
    console.log('Camilo si aparece dentro del array.')
}else{
    console.log('No encontrado en la base de datos.')
}
