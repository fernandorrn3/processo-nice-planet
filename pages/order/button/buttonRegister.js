import { ContextOrder } from "../contextOrder"
import { useContext } from "react"
export default function ButtonHist(props) {
    const estadoModal = useContext(ContextOrder)

    const pegaId = (e) => {
        props.setIdsHist(props.ids)
        estadoModal.estadoHisto ? props.setEstadoHistory(false) :  props.setEstadoHistory(true)
        console.log(estadoModal)
    }
    return (
        <button onClick={pegaId}>historico</button>
    )
}