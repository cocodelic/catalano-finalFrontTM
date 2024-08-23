import { createContext, useContext, useState } from "react";
import ListaUsuarios from './datos/Usuarios.json'

const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {
    const [usuarios, setUsuarios] = useState(JSON.parse(localStorage.getItem("users")) || ListaUsuarios)
    const [usuarioActivo, setUsuarioActivo] = useState(JSON.parse(localStorage.getItem("usuarioActivo")) || false)
    const [errorLogin, setErrorLogin] = useState(false)
    const loginUsuario = (e) => {
        e.preventDefault()
        let usuarioEncontrado = usuarios.find(user => user.user_name.toLowerCase() === e.target[0].value.toLowerCase() && user.password === e.target[1].value)
        if(usuarioEncontrado) {
            setUsuarioActivo(usuarioEncontrado)
            localStorage.setItem("usuarioActivo", JSON.stringify(usuarioEncontrado)) 
            setErrorLogin(false)          
        } else{
            setErrorLogin('Error: El usuario y contraseña son incorrectos.')
        }

        
    }

    const cerrarSesion = () =>{
        setUsuarioActivo(false)
    localStorage.removeItem("usuarioActivo")

    } 
    return (
        <GlobalContext.Provider value={{ usuarios, usuarioActivo, loginUsuario, errorLogin, cerrarSesion }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}

export default GlobalContext