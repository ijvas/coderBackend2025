const fs = require('fs')

const funcionAsincrona = async() =>{
    
    try {
        const contenidoStr = await fs.promises.readFile('./package.json', 'utf-8')
        const contenidoObj = JSON.parse(contenidoStr)
    
        const stats = await fs.promises.stat('./package.json')
    
        const info = {
            contenidoStr: contenidoStr,
            contenidoObj: contenidoObj,
            size: `${stats.size} bytes`
        }
    
        console.log('Objeto info: ', info)

        const infoJsonStr = JSON.stringify(info,null,2)
        
        await fs.promises.writeFile('./info.json', infoJsonStr)
        
    } catch (error) {
        throw new Error('MENSAJE DE ERROR', error)
    }
}

funcionAsincrona()