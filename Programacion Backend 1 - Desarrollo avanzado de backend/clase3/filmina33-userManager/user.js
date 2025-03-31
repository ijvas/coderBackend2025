import UserManager from "./UsersManager.js";

const usuario = async()=>{

    const manager = new UserManager()
    
    await manager.crearUsuario({
        nombre: 'Vero',
        apellido: 'beni',
        edad: 38,
        curso: 'Web Design'
    })

    const usuarios = await manager.consultarUsuarios()
    

}

usuario()