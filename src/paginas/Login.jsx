import { useGlobalContext } from "../GlobalContext"
import { Navigate } from "react-router-dom"

const Login = () => {
    const { usuarioActivo, loginUsuario, errorLogin } = useGlobalContext()
    if (usuarioActivo) {
        return <Navigate to={'/'} />
    }

    return (
        <div className="container">
            <div className="row main-section">
                <h2 className="tituloLogin">Bienvenidos a EntornosApp</h2>
            </div>
            <form onSubmit={loginUsuario}>
                <div className="row">
                    <div className="twelve column">
                        <label htmlFor="email">Nombre de usuario</label>
                        <input type="text" name="nombre_usuario" id="nombre_usuario" className="input"/>
                    </div>
                </div>
                <div className="row">
                    <div className="twelve column">
                        <label htmlFor="email">Password</label>
                        <input type="password" name="password" id="password"  className="input"/>
                    </div>
                </div>
                <div className="row">
                    <div className="twelve column">
                        <input type="submit" value="Iniciar sesion" className="iniciarSesion"/>
                    </div>
                </div>
            </form>
            {errorLogin && <p className="errorLogin">{errorLogin}</p>}
        </div>
    )
}

export default Login