import { createHmac } from 'node:crypto'

class UsersManager{
    static usuarios = []

    static hashPassword(password){
        const hash = createHmac('sha256', password).update(password).digest('hex')
        return hash
    }

    static crearUsuario({ nombre, apellido, nombreDeUsuario, password }){
        const usuario = {
            nombre,
            apellido,
            nombreDeUsuario,
            password: this.hashPassword(password)
        }
        this.usuarios.push(usuario)
        console.log('Usuario creado')
    }

    static mostrarUsuarios(){
        if(!this.usuarios){
            console.log('No hay usuarios.')
            return
        }
        console.log('Lista de usuarios: ', this.usuarios)
    }

    static validarUsuarios(userName, password){
        const usuario = this.usuarios.find(user => user.nombreDeUsuario === userName)

        if(!usuario){
            console.log('El usuario no existe')
            return
        }

        const passwordHasheado = this.hashPassword(password)
        if(usuario.password === passwordHasheado){
            console.log('Logueado')
        }else{
            console.log('Contraseña incorrecta.')
        }

    }

}

UsersManager.crearUsuario({
    nombre: 'Coder',
    apellido: 'House',
    nombreDeUsuario: 'CoderHouse',
    password: '123'
})

UsersManager.mostrarUsuarios()

UsersManager.validarUsuarios('CoderHouse', '123')