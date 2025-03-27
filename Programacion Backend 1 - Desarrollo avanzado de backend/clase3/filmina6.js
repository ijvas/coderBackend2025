const generarNumeroAleatorio = (min,max) => Math.floor(Math.random() * (max - min + 1)) + min

const generarNumerosAleatorios = () =>{
    return new Promise((resolve,reject) => {
        try {
            
            const conteo = {}
    
            for (let i = 0; i = 10000; i++){
                const num = generarNumeroAleatorio(1,20)
                conteo[num] = (conteo[num] || 0) + 1
            }
    
            resolve(conteo)

        } catch (error) {
            reject(error)
        }
    })
}

const ejecutarGeneracion = async() =>{
    try {
        const resultado = generarNumerosAleatorios()
        console.log('Proceso completado. Resultado: ')
        console.log(resultado)
    } catch (error) {
        console.log('Ocurrio un error: ', error)
    }

}

ejecutarGeneracion()