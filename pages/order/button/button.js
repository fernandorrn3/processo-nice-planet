import { useContext } from "react"
import { ContextOrder } from "../contextOrder"

export default function Button(props) {
    const estadoBotao = useContext(ContextOrder)

    const pegarId = (e) => {

    estadoBotao.estado ? props.setEstadoModal(false) : props.setEstadoModal(true)
    props.setIds({
        idVinculo: props.idVinculo,
        idPropriedade: props.idPropriedade,
        idProdutor:props.idProdutor
    })


  }
     
    return (
        <button onClick={pegarId} disabled={props.desabilitar} >Detalhes</button>
    )
}