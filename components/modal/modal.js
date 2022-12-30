import styles from './modal.module.css'
import { useContext } from 'react'
import { useState } from 'react'
import { ContextOrder } from '../../pages/order/contextOrder'
import { useEffect } from 'react'
export default function Modal(props) {
    const estadoModal = useContext(ContextOrder)
    const [styleModal, setStyleModal] = useState()

    const analise = []
    const propriedade = []
    const produtor = []

    const abertoOuFechado = {
        display: styleModal
    }
    useEffect(() => {

        estadoModal.estado ? setStyleModal('block') : setStyleModal('none')
    }, [estadoModal])


    const AbrirFechar = () => {

        estadoModal.estado ? props.setEstadoModal(false) : props.setEstadoModal(true)
    }




    if (!estadoModal.ids) {
        return null
    }

   


    const pegaMonitoramento = estadoModal.monitoramentoUp.filter((el) => {     
                return el.idVinculo == estadoModal.ids.idVinculo 

    })

    analise.push(pegaMonitoramento)

    const pegaPropriedade = estadoModal.dadosMerge.find((el) => {
        for (const key in el) {
            if (key == 'idPropriedade') {
                return el.idPropriedade == estadoModal.ids.idVinculo
            }
        }
    })

    propriedade.push(pegaPropriedade)

    const pegaProdutor = estadoModal.dadosMerge.find((el) => {
        for (const key in el) {
            if (key == 'idProdutor') {
                return el.idProdutor == estadoModal.ids.idVinculo
            }
        }
    })
    produtor.push(pegaProdutor)

const sinaliza = (e) =>{
console.log(e.target.id)
console.log(props)
props.setBotao(prevState =>{
    return prevState.map(item =>{
        return item.idVinculo == e.target.id ? {...item, estilo:'green',status:'Finalizado'} : item
    })
})
}



    return (
        <div className={styles.modal} style={abertoOuFechado}>
            <div className={styles.modalContent} >
                <div className={styles.modalHeader}>
                    <span className={styles.close} onClick={AbrirFechar}>&times;</span>
                    <h2>Detalhe Ordem de Compra</h2>
                </div>
                <div className={styles.modalBody}>
                    <div className={styles.ContaiertableModal}>
                        <table className={styles.tableModal}>
                            <thead>

                                <tr className={styles.rowTableModal}>
                                    <th>monitoramento</th>
                                </tr>
                                <tr className={styles.rowTableModal}>
                                    <th>Parecer Analise</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pegaMonitoramento.map((el) => {
                                    return (
                                        <tr className={styles.rowTableModal}>
                                            <td>
                                                {el.parecerAnalise}
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                        <table className={styles.tableModal}>
                            <thead>

                                <tr className={styles.rowTableModal}>
                                    <th colSpan={2}>Propriedade</th>
                                </tr>
                                <tr className={styles.rowTableModal}>
                                    <th >Id propriedade</th>
                                    <th >tipo Propriedade</th>
                                </tr>
                             
                            </thead>
                            <tbody className={styles.tableModal}>
                                {propriedade.map((el) => {
                                    return (
                                        <tr className={styles.rowTableModal}>
                                            <td>{el.idPropriedade}</td>
                                            <td>{el.tipoPropriedade}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                        <table className={styles.tableModal}>
                            <thead>

                                <tr className={styles.rowTableModal}>
                                    <th>Produtor</th>
                                </tr>
                                <tr className={styles.rowTableModal}>
                                    <th>id Produtor</th>
                                </tr>
                            </thead>
                            <tbody>
                                {produtor.map((el) => {
                                    return (
                                        <tr className={styles.rowTableModal}>
                                            <td>
                                                {el.idProdutor}
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>

                        <table className={styles.tableModal}>
                            <thead>
                                <tr>
                                    <th>sinalizar</th>
                                </tr>
                                <tr>
                                    <th>Compras</th>
                                </tr>
                            </thead>
                            <tbody>
                             {pegaMonitoramento.map((el)=>{
                                return(
                                    <td>
                                        <tr><button onClick={sinaliza} id={el.idVinculo}>Sinalizar compra</button></tr>
                                        </td>
                                )
                             })} 
                            </tbody>
                        </table>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

//renderizar 1 botao
//class compro
//class espera
