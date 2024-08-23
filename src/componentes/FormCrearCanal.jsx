import { useEntornosContext } from "../EntornosContext"
import { useState } from "react"

const FormCrearCanal = ({entornoActivo}) => {
    const [formActivo, setFormActivo] = useState(false)
    const [displayCrearCanal, setDisplayCrearCanal] = useState('')
    const {handleCrearCanal} = useEntornosContext()
    const crearCanal = (e) => {
        e.preventDefault()
        handleCrearCanal(entornoActivo.id, e.target.canal.value)
        e.target.canal.value= ''
        setFormActivo(false)
    }

    const handleCerrar = () => {
        setFormActivo('')
    }

    if(!formActivo){ 
        return <button onClick={() => setFormActivo(true)}>Crear canal</button>
    }
    return ( <form onSubmit={crearCanal} style={{display: displayCrearCanal}}>
        <input type="text" name="canal" id="canal" className="inputCrearCanal"/>
        <input type="submit" value="Aceptar" className="crearCanal" />
        <input type="button" value='cerrar' onClick={handleCerrar} className="crearCanal"></input>
    </form>
    )
}

export default FormCrearCanal