import { useGlobalContext } from "../GlobalContext"
import { useParams, Link } from "react-router-dom"
import { useEntornosContext } from "../EntornosContext"
import ColumnaDerecha from "../componentes/ColumnaDerecha.jsx"
import Chat from "../componentes/Chat.jsx"
import { useState } from "react"

const Inicio = () => {
    const [displayLista, setDisplayLista] = useState('')
    
    const { usuarioActivo, cerrarSesion } = useGlobalContext()
    const { entornoId, canalId } = useParams()
    const { entornos } = useEntornosContext()

    const entornoActivo = entornos.find(entorno => entorno.id == entornoId)

    const canalActivo = entornoActivo?.canales.find(canal => canal.id == canalId)

    const handleDisplayLista = () => {
        if(!displayLista){
            setDisplayLista('none')
        }else{
            setDisplayLista('')
        }
    }
    


    console.log(displayLista)
    return (
        <div className="containerInicio">
            <nav className="navbar">
                <div className="titulo">Bienvenido <strong>{usuarioActivo.user_name}</strong> a EntornosApp</div>
                <ul>
                    <li><Link to="/" className="botonNavbarArriba">Inicio</Link></li>
                    <li className="botonNavbarArriba"><span onClick={cerrarSesion}>Cerrar Sesion</span></li>
                    <li className="botonNavbarArriba mostrarCanales" onClick={handleDisplayLista}>Lista Canales</li>                    
                </ul>
            </nav>
            <div className="inicioMain">
                <ColumnaDerecha entornos={entornos} entornoActivo={entornoActivo} displayLista={displayLista}></ColumnaDerecha>
                <Chat entornoActivo={entornoActivo} canalActivo={canalActivo}></Chat>
            </div>
        </div>
    )
}

export default Inicio