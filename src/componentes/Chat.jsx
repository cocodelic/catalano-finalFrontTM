import { useEntornosContext } from "../EntornosContext"

const Chat = ({ entornoActivo, canalActivo }) => {
    const { handleMandarMensaje } = useEntornosContext()
    const botonEnviar = (e) => {
        e.preventDefault()
        handleMandarMensaje(entornoActivo.id, canalActivo.id, e.target.message.value)
        e.target.message.value = ''
    }
    if (!entornoActivo || !canalActivo) {
        return (<div className="ayudin"><p>Selecciona un entorno y un canal para ver el chat</p> </div>)
    }
    return (
        <div className="canal-form">
            <div className="canal">
                <h2>{canalActivo.name}</h2>
                <div className="chat">
                    <div className="message-list">
                        {
                            canalActivo && canalActivo.mensajes.map(mensajito =>
                                <div className="message" key={mensajito.id}>
                                    <strong className="username">{`${mensajito.user_name}: `}</strong>
                                    <span className="text">{mensajito.message}</span>
                                </div>
                            )
                        }
                    </div>
                </div>

            </div>
                <form onSubmit={botonEnviar} className="chat-form">
                    <textarea type="text" name="message" id="message" placeholder="Ingrese su mensaje aquí"/>
                    <input type="submit" value="Enviar" className="submitMensaje"/>
                </form>
        </div>

    )
}

export default Chat
