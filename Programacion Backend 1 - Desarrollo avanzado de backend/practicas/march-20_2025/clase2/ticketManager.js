class TicketManager{

    #profitBasePrice = 0.15
    constructor(){
        this.events = [],
        this.id = 1
    }

    getEvents(){
        console.log(' ')
        console.log(this.events)
    }

    addEvent(name, place, precio, capacity = 50, date = new Date().toDateString()){

        const event = {
            name,
            place,
            precio: precio + (precio * this.#profitBasePrice),
            capacity,
             date ,
            id: this.id++,
            participants: []
        }

        this.events.push(event)
        console.log(' ')
        console.log(`The ${event.name} event has been succesfully added.`)

    }

    addUser(eventId, userId){
        const isEvent = this.events.find(event => event.id === eventId)

        const isUser = isEvent.participants.find(id => id === userId)

        if(isUser){
            console.log(' ')
            console.log('That user is allready added to the Event.')
        }else{
            isEvent.participants.push(userId)
            console.log(' ')
            console.log('The user has been added to the Event.')
        }
    }

    putEventOnTour(eventId,newPlace,newDate){
        const isEvent = this.events.find(event => event.id === eventId)

        if(!isEvent){
            console.log(' ')
            console.log('Event not found.')
        }else{

            const newEvent = {
                ...isEvent,
                place: newPlace,
                date: newDate,
                participants: [],
                id: this.id++
            }

            this.events.push(newEvent)

            console.log(' ')
            console.log('This event will be on tour', newEvent)
        }
    }

}

const manager = new TicketManager()

manager.addEvent('Hernan Cattaneo', 'La Fabrica', 200,)
manager.addUser(1,1843)
manager.addUser(1,9543)

manager.addEvent('Boris Brejcha', 'La Fabrica', 300)
manager.addUser(2, 4532)

manager.putEventOnTour(2,'La estación','Fri Apr 25 2025')



manager.getEvents()