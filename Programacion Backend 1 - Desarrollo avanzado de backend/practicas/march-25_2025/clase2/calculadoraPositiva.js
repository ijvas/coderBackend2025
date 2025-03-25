const sumar = (a,b)=>{

    const validarNumeros = () =>{
        if (a === 0 || b === 0){
            return 'Operación innecesaria'
        }
    }

    const isNegative = () => {
        if((a + b) < 0){
            return 'La calculadora solo debe devolver valores positivos.'
        }
    }

    return new Promise((resolve, reject) => {
        if(validarNumeros() || isNegative()){
            reject( validarNumeros() || isNegative() )
        }else{
            resolve(a + b)
        }
    })
}


const restar = (a,b)=>{
    return new Promise((resolve,reject)=>{
        if(a === 0 || b === 0){
            reject(console.log('Operación innecesaria'))
        }else if((a - b) < 0){
            reject(console.log('La calculadora solo debe volver valores positivos.'))
        }else{
            resolve(a - b)
        }
    })
}

const multiplicar = ( a , b ) => {
    return new Promise((resolve,reject)=>{
        if( a < 0 || b < 0){
            reject('La calculadora solo debe volver valores positivos.')
        }else{
            resolve(a * b)
        }
    })
}

const dividir = (a , b ) => {
    return new Promise((resolve, reject) => {
        if(b === 0){
            reject('No se puede dividir por cero.')
        }else if(a === 0){
            reject('Operación innecesaria.')
        }else if((a / b) < 0){
            reject('La calculadora solo debe volver valores positivos.')
        }else{
            resolve( a / b)
        }
    })
}

const probarSuma = async () => {
    try {
        let suma = await sumar(2, 0)
        console.log('Resultado suma: ', suma)
    } 
    catch (error) {
        console.log('Error suma: ', error)
    }
}

probarSuma()

const probarResta = async () => {
    try {
        let resta = await restar(5,4)
        console.log('Resultado resta: ', resta)
    } catch (error) {
        console.log('Error resta: ', error)
    }
}

probarResta()

const probarMultiplicacion = async() => {
    try {
        const multiplicacion = await multiplicar(3,0)
        console.log('Resultado multiplicación: ', multiplicacion)
    }
    catch(error) {
        console.log('Error multiplicación: ', error)
    }
}

probarMultiplicacion()

const probarDivision = async() => {
    try{
        const division = await dividir(10,5)
        console.log('Resultado division: ', division)
    }catch(error){
        console.log('Error división: ', error)
    }
}

probarDivision()