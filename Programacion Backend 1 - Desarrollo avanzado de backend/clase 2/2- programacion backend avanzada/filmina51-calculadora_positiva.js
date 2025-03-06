const suma = (num1,num2) =>{

    const validarSumandos = ()=>{
        if(num1 === 0 || num2 === 0){
            return 'Operación Innecesaria.'
        }
    }
     
    const validarNegativos = () => {
        if(num1 + num2 < 0){
            return'La calculadora sólo debe devolver valores positivos.'
        }
    }

    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            if( validarSumandos() || validarNegativos() ){
                reject(validarSumandos() || validarNegativos())
            } else {
                resolve(num1 + num2)
            }
        }, 3000)
    })
}


const resta = (num1,num2) => {

    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if( num1 === 0 || num2 === 0 ){
                reject('Operación inválida.')
            } else if (num1 - num2 < 0){
                reject('La calculadora solo puede devolver valores positivos.')
            }else {
                resolve(num1 - num2)
            }
        }, 3000)
    })
}



const multiplicacion = (num1,num2) => {

    return new Promise((resolve,reject) => {
        setTimeout( ()=> {
            if(num1 < 0 || num2 < 0) {
                reject('La calculadora solo puede devolver valores positivos.')
            } else {
                resolve (num1 * num2)
            }
        },3000)
    })
}



const division = (num1,num2) => {
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
            if(num1 < 0 || num2 < 0){
                reject('La calculadora solo puede devolver valores positivos.')
            } else if (num2 === 0){
                reject('No se pueden hacer divisiones por cero.')
            } else {
                resolve (num1 / num2)
            }
        },3000)
    })
}



const calculosSuma = async() => {
    try{
        // let resultadoSumaInnecesaria = await suma(2,0)
        // let resultadoSumaNegativa = await suma(-10,5)
        let resultadoSuma = await suma(2,2)
        // console.log(resultadoSumaInnecesaria)
        // console.log(resultadoSumaNegativa)
        console.log(resultadoSuma)
    }catch(error){
        console.log(error)
    }
} 

const calculosResta = async() =>{
    try{
        // let resultadoRestaInvalida = await resta(2,0)
        // let resultadoRestaNegativa = await resta(2,10)
        let resultadoResta = await resta(10,5)
        // console.log(resultadoRestaInvalida)
        // console.log(resultadoRestaNegativa)
        console.log(resultadoResta)
    }
    catch(error){
        console.los(error)
    }
}

const calculosMultiplicacion = async() => {
    try{
        // let resultadoMultiplicacionInvalida = await multiplicacion(0,10)
        // let resultadoMultiplicacionNegativa = await multiplicacion(-3,5)
        let resultadoMultiplicacion = await multiplicacion(2,4)
        // console.log(resultadoMultiplicacionInvalida)
        // console.log(resultadoMultiplicacionNegativa)
        console.log(resultadoMultiplicacion)

    }
    catch(error){
        console.log(error)
    }
}

const calculosDivision = async() => {
    try{
        // let resultadoDivisionNegativa = await division(-3,4)
        // let resultadoDivisionPorCero = await division(10,0)
        let resultadoDivision = await division(10,2)
        // console.log(resultadoDivisionNegativa)
        // console.log(resultadoDivisionPorCero)
        console.log(resultadoDivision)
    }
    catch(error){
        console.log(error)
    }
}


calculosSuma()
calculosResta()
calculosMultiplicacion()
calculosDivision()

console.log('segundo 1')

setTimeout(()=>{
    console.log('Estamos esperando que se resuelva la cuenta...')
}, 1000)

setTimeout(()=>{
    console.log('Seguimos esperando que se resuelva la cuenta...')
}, 2000)