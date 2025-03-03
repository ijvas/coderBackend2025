// class TicketManager{
//     #precioBaseDeGanancia = 0.15
//     constructor(){
//         this.eventos = []
//         this.id = 1
//     }

//     getEventos(){
//         return this.eventos
//     }

//     agregarEvento(nombre, lugar, precio, capacidad = 50, fecha = new Date() ) {
//         const newEvento = {
//             id: this.id++,
//             nombre,
//             lugar,
//             precio: precio + precio * this.#precioBaseDeGanancia,
//             capacidad,
//             fecha,
//             participantes: []
//         }

//         this.eventos.push(newEvento)
//         console.log(`Evento "${nombre}" agregado con éxito.`)
//     }


//     agregarUsuario(idEvento, idUsuario){
//         const evento = this.eventos.find( evento => evento.id === idEvento)
//         if(!evento){
//             console.log('Error, el evento no existe.')
//             return
//         }
//         if (evento.participantes.includes(idUsuario)){
//             console.log('El usuario ya está registrado en este evento.')
//             return
//         }

//         evento.participantes.push(idUsuario)
//         console.log(`Usuario ${idUsuario} agregado al evento "${evento.nombre}".`)
//     }

    


//     ponerEventoEnGira(idEvento, nuevaLocalidad, nuevaFecha){
//         const eventoOriginal = this.eventos.find(evento => evento.id === idEvento)

//         if(!eventoOriginal){
//             console.log('Error, el evento no existe.')
//             return
//         }
        
//         const nuevoEvento = {
//             ...eventoOriginal,
//             id: this.id++,
//             lugar: nuevaLocalidad,
//             fecha: nuevaFecha,
//             participantes: []
//         }

//         this.eventos.push(nuevoEvento)
//         console.log(`Evento "${eventoOriginal.nombre}" ahora está en gira en ${nuevaLocalidad} el ${nuevaFecha}.`)
//     }
// }

// const manager = new TicketManager()

// manager.agregarEvento('Concierto Rock', 'Madrid', 100)
// manager.agregarEvento('Festival de Jazz', 'Barcelona', 80)

// console.log(manager.getEventos())

// manager.agregarUsuario(1, 101)
// manager.agregarUsuario(1, 102)
// manager.agregarUsuario(1, 101)


// manager.ponerEventoEnGira(1, 'Valencia', '2024-06-15')

// console.log(manager.getEventos())














class TicketManager{
    #precioBaseDeGanancia = 0.15

    constructor(){
        this.eventos = []
        this.id = 1
    }

    getEventos(){
        return this.eventos
    }

    agregarEvento(nombre, lugar, precio, capacidad = 50, fecha = '03-march-2025'){
        
        const nuevoEvento = {
            id: this.id++,
            nombre,
            lugar,
            precio: precio + precio * this.#precioBaseDeGanancia,
            capacidad,
            fecha,
            participantes: []
        }

        this.eventos.push(nuevoEvento)
        console.log(`Evento "${nuevoEvento.nombre}" creado con éxito.`)
    }

    agregarUsuario(idEvento, idUsuario){
        const evento = this.eventos.find(evento => evento.id == idEvento)

        if(!evento){
            console.log('Error: No existe un evento con ese ID')
            return
        }        
        
        const usuario = evento.participantes.includes(idUsuario)

        if(usuario){
            console.log(`El usuario ya está registrado para el evento ${evento.nombre}`)
            return
        }

        evento.participantes.push(idUsuario)
        console.log(`El usuario ${idUsuario} fue agregado al evento ${evento.nombre} exitosamente.`)

    }


    ponerEventoEnGira(idEvento, nuevaLocalidad, nuevaFecha){
        const eventoOriginal = this.eventos.find(evento => evento.id === idEvento)

        if(!eventoOriginal){
           console.log('Error: No existe evento con ese ID') 
        }

        const nuevoEvento = {
            ...eventoOriginal,
            lugar: nuevaLocalidad,
            fecha: nuevaFecha,
            id: this.id++,
            participantes: []
        }

        this.eventos.push(nuevoEvento)
        console.log(`El evento ${eventoOriginal.nombre} ahora estará de gira en ${nuevaLocalidad} la fecha ${nuevaFecha}`)
    }


}


const manager = new TicketManager()

manager.agregarEvento('Concierto de Rock', 'Córdoba', 200)
manager.agregarEvento('Obra de Teatro', 'Córdoba', 400)
manager.agregarEvento('Hernan Cattaneo', 'Buenos Aires', 600)

manager.agregarUsuario(9,1800)
manager.agregarUsuario(1,1800)
manager.agregarUsuario(1,1800)
manager.agregarUsuario(3,2143)

console.log(manager.getEventos())


manager.ponerEventoEnGira(3,'Córdoba', '25-abril-2025')

console.log(manager.getEventos())
