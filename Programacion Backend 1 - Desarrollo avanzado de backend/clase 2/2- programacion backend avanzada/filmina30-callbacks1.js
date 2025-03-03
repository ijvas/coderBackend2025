// Utilizaremos este arreglo de prueba

let valoresOriginales = [1,2,3,4,5]

//Estamos acostumbrados a leer una función map de la siguiente forma:
let nuevosValores = valoresOriginales.map(x=>x+1)  //nuevosValores tendrá [2,3,4,5,6]


// Sin embargo, lo que metemos dentro de la función map es una función (flecha,más específicamente), que indica que se sume en 1 el valor del número que esté en el arreglo.
//¿Siempre tenemos que sumar 1? No! Nosotros podemos meter la operación que queramos, ¡y map la ejecutará de manera interna!

let otrosValores = valoresOriginales.map(x=>x*2)  //otrosValores tendrá [2,4,6,8,10]

let masValores = valoresOriginales.map(x=>'a')  //masValores tendrá ['a','a','a','a','a']


//Notamos que, no importa cuánto cambie la función que esté metiendo dentro de map, map está hecho para RECIBIR UNA FUNCIÓN COMO PARÁMETRO y poder ejecutarla cuando lo considere pertinente. Ahora. Si estructuramos el callback por fuera.

const functionCallBack = (valor)=> {   //función que evalúa si el número del arreglo es un número par.
    if(valor%2 === 0){
        return valor
    }else{
        return 'no es par'
    }
}

const evaluacionDePares = valoresOriginales.map(functionCallBack) //Paso la función completa como argumento de la función map

console.log(evaluacionDePares) //Resultado: ['no es par', 2, 'no es par', 4, 'no es par']