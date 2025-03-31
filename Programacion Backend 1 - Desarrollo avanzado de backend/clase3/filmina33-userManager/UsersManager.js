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

        usuarios.push(usuario)
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
}

export default UserManager