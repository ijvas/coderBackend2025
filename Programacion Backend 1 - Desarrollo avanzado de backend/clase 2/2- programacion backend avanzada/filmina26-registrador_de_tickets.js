class TicketManager{
    #precioBaseDeGanancia = 0.15
    constructor(){
        this.eventos = []
        this.id = 1
    }

    getEventos(){
        return this.eventos
    }

    agregarEvento(nombre, lugar, precio, capacidad = 50, fecha = new Date() ) {
        const newEvento = {
            id: this.id++,
            nombre,
            lugar,
            precio: precio + precio * this.#precioBaseDeGanancia,
            capacidad,
            fecha,
            participantes: []
        }

        this.eventos.push(newEvento)
        console.log(`Evento "${nombre}" agregado con éxito.`)
    }


    agregarUsuario(idEvento, idUsuario){
        const evento = this.eventos.find( evento => evento.id === idEvento)
        if(!evento){
            console.log('Error, el evento no existe.')
            return
        }
        if (evento.participantes.includes(idUsuario)){
            console.log('El usuario ya está registrado en este evento.')
            return
        }

        evento.participantes.push(idUsuario)
        console.log(`Usuario ${idUsuario} agregado al evento "${evento.nombre}".`)
    }

    


    ponerEventoEnGira(idEvento, nuevaLocalidad, nuevaFecha){
        const eventoOriginal = this.eventos.find(evento => evento.id === idEvento)

        if(!eventoOriginal){
            console.log('Error, el evento no existe.')
            return
        }
        
        const nuevoEvento = {
            ...eventoOriginal,
            id: this.id++,
            lugar: nuevaLocalidad,
            fecha: nuevaFecha,
            participantes: []
        }

        this.eventos.push(nuevoEvento)
        console.log(`Evento "${eventoOriginal.nombre}" ahora está en gira en ${nuevaLocalidad} el ${nuevaFecha}.`)
    }
}

const manager = new TicketManager()

manager.agregarEvento('Concierto Rock', 'Madrid', 100)
manager.agregarEvento('Festival de Jazz', 'Barcelona', 80)

console.log(manager.getEventos())

manager.agregarUsuario(1, 101)
manager.agregarUsuario(1, 102)
manager.agregarUsuario(1, 101)


manager.ponerEventoEnGira(1, 'Valencia', '2024-06-15')

console.log(manager.getEventos())