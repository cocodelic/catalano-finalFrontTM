import { createContext, useContext, useState } from "react";
import ListaEntornos from './datos/entornos.json'
import { useGlobalContext } from "./GlobalContext";

const EntornosContext = createContext()

export const EntornosContextProvider = ({ children }) => {
    const [entornos, setEntornos] = useState(JSON.parse(localStorage.getItem("entornos")) || ListaEntornos)
    const {usuarioActivo} = useGlobalContext()
    const handleMandarMensaje = (entornoId, canalId, mensaje) => {
        if(mensaje == '') return 
        
        const nuevosEntornos = entornos.map(entorno => {
            if (entorno.id == entornoId) {
                return {
                    ...entorno,
                    canales: entorno.canales.map(canal => {
                        if (canal.id == canalId) {
                            return {
                                ...canal,
                                mensajes: [
                                    ...canal.mensajes,
                                    {
                                        id: canal.mensajes.length + 1,
                                        entorno_id: entornoId,
                                        canal_id: canalId,
                                        user_name: usuarioActivo.user_name,
                                        message: mensaje,
                                        created_at: new Date().toLocaleString(),
                                        active: true
                                    }
                                ]
                            };
                        }
                        return canal;
                    })
                };
            }
            return entorno;
        });

       
        setEntornos(nuevosEntornos);

        localStorage.setItem("entornos", JSON.stringify(nuevosEntornos));
    }
    const handleCrearCanal = (entornoId, canal) => {

       
        const nuevosEntornos = entornos.map(entorno => {
            if (entorno.id == entornoId) {
                return {
                    ...entorno,
                    canales: [
                        ...entorno.canales,
                        {
                            id: entorno.canales.length + 1,
                            name: canal,
                            mensajes: []
                        }
                    ]
                };
            }
            return entorno;
        });
    
        
        setEntornos(nuevosEntornos);
        localStorage.setItem("entornos", JSON.stringify(nuevosEntornos));

    }
    return (
        <EntornosContext.Provider value={{entornos, handleMandarMensaje, handleCrearCanal}}>
             {children}
        </EntornosContext.Provider>
    )
}

export const useEntornosContext = () => {
    return useContext(EntornosContext)
}

export default EntornosContext