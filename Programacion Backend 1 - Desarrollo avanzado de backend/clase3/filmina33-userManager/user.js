import UserManager from "./UsersManager.js";

const usuario = async()=>{

    const manager = new UserManager()
    
    await manager.crearUsuario({
        nombre: 'Ismael',
        apellido: 'Vasconcel',
        edad: 35,
        curso: 'Backend'
    })

    const usuarios = await manager.consultarUsuarios()
    

}


const borrarUsuario = async(userId) =>{

    const manager = new UserManager()
    manager.borrarUsuario(userId)
}


// usuario()
borrarUsuario(2)
borrarUsuario(1)
borrarUsuario(3)