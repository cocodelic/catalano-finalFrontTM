import { Outlet, Navigate } from "react-router-dom";
import { useGlobalContext } from "../GlobalContext";
import { EntornosContextProvider } from "../EntornosContext";

const RutaProtegida = () => {
    const {usuarioActivo} = useGlobalContext()
    if (!usuarioActivo) { 
        return <Navigate to={'/login'} />
    }
    return (
        <EntornosContextProvider><Outlet /></EntornosContextProvider>
    )
}

export default RutaProtegida