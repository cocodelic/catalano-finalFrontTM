import { NavLink } from "react-router-dom"

const ListaCanales = ({entornoActivo}) => {
    return (
        <ul> 
            {entornoActivo && entornoActivo.canales.map(canal=>(
                <NavLink to={`/entorno/${entornoActivo.id}/canal/${canal.id}`} key={canal.id}>
                    <li className="li-canal"> #{canal.name}</li>
                </NavLink>
            ))}
        </ul>
    )
}

export default ListaCanales