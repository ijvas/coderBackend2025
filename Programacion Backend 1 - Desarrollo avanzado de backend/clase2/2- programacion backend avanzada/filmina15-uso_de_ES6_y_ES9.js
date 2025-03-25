const objetos = [
    {
        manzanas: 3,
        peras: 2,
        carne: 1,
        jugos: 5,
        dulces: 2
    },
    {
        manzanas: 1,
        sandias: 1,
        huevos: 6,
        jugos: 1,
        panes: 4
    }
]


const productos = objetos.reduce((acc, fruta) => {
    Object.keys(fruta).forEach( producto => {
        if(!acc.includes(producto)){
            acc.push(producto)
        }
    })
    return acc
}, [])

console.log(productos)



const valorTotal = objetos.reduce((acc, fruta) => {
    const totalPorFruta = Object.values(fruta).reduce((suma, cantidad) => suma + cantidad,0)
    return acc + totalPorFruta
}, 0)

console.log(valorTotal)


