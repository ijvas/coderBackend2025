import moment from 'moment'

const fechaActual = moment()
const fechaDeNacimiento = moment('1989-04-25', 'YYYY-MM-DD')

if(fechaDeNacimiento.isValid()){
    const diasPasados = fechaActual.diff(fechaDeNacimiento, 'days')
    console.log(`Han pasado ${diasPasados} días desde tu nacimiento.`)
}else {
    console.log('La fecha no es valida.')
}