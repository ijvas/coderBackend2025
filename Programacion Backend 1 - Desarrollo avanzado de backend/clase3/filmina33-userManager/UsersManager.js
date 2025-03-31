import fs from 'fs/promises'

class UserManager{
    constructor(){
        this.file = 'Usuarios.json'
    }

    crearUsuario = async(usuario)=>{
        let usuarios = []

        try {
            const data = await fs.readFile(this.file, 'utf-8')
            usuarios = JSON.parse(data)
        } catch (error) {
            console.log('Error al leer el archivo', error)
        }

        usuarios.push({...usuario,id:usuarios.length + 1})
        await fs.writeFile(this.file, JSON.stringify(usuarios,null,2))
        try {
            console.log('Usuario registrado')
        } catch (error) {
            console.log('No se pudo registrar al usuario', error)
        }
        
    }

    consultarUsuarios = async()=>{ 
        try {
            const data = await fs.readFile(this.file, 'utf-8')
            const infoObj = JSON.parse(data)
            return infoObj
        } catch (error) {
            console.log('Error al consultar los usuarios', error)
        }
    }

    borrarUsuario = async(userId) => {
        const data = await fs.readFile(this.file, 'utf-8')
        try {
            const infoObj = JSON.parse(data)
            const usuariosFiltrados = infoObj.filter(user => user.id !== userId)
            if(infoObj.length === usuariosFiltrados.length){
                console.log('No hay un usuario con ese Id')
                return
            }

            await fs.writeFile(this.file, JSON.stringify(usuariosFiltrados,null,2))
            console.log(`Usuario con ID ${userId} eliminado.`)
        } catch (error) {
            console.log('Error al borrar usuario', error)
        }

    }
}

export default UserManager