import { useNavigate } from "react-router-dom";
import ListaCanales from "./ListaCanales";
import FormCrearCanal from "./FormCrearCanal";
import { useGlobalContext } from "../GlobalContext";
import { useEffect } from "react";


const ColumnaDerecha = ({entornos, entornoActivo, displayLista}) => {
    const navigation = useNavigate()
    const handleSelect = (e) => {
        const idSeleccionada = e.target.value
        if(idSeleccionada == '') {
            return 
        }
        navigation(`/entorno/${idSeleccionada}`)
    }
    const {usuarioActivo} = useGlobalContext()
    useEffect(() => {},[displayLista])
    return (
        <div className="navIzquierda" style={{display: displayLista}}>
            <ul>
                <li className="li-entorno">
                    <select onChange={handleSelect} className="opciones" value={entornoActivo?.id || ""}>
                        <option value="">Selecciona un entorno</option>
                        {entornos.map(entorno => (
                            <option value={entorno.id} key={entorno.id}>
                                {entorno.name}
                            </option>
                        ))}
                    </select>
                </li>
            </ul>
            <ListaCanales entornoActivo={entornoActivo}></ListaCanales>
            {entornoActivo && usuarioActivo.is_admin && <FormCrearCanal entornoActivo={entornoActivo}/>}
        </div>
    )
}

export default ColumnaDerecha