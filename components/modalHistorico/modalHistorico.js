import styles from './ModalHistorico.module.css'
import { useContext, useState } from 'react'
import { ContextOrder } from '../../pages/order/contextOrder'
import { useEffect } from 'react'

export default function ModalHistorico(props) {
  const [styleModal, setStyleModal] = useState()

  const historyModal = useContext(ContextOrder)

  const bloquiado = []
  let tabelaBlock
  let semHistorico

  const style = {
    display: styleModal
  }

  useEffect(() => {
    historyModal.estadoHisto ? setStyleModal('block') : setStyleModal('none')

  }, [historyModal.estadoHisto])



  const AbrirFechar = () => {

    historyModal.estadoHisto ? props.setEstadoHistory(false) : props.setEstadoHistory(true)

  }


  const verifica = historyModal.idsBloquiados.filter((el) => {
    return el == historyModal.idHistory
  })

  if (verifica.length > 0) {
    console.log('tem')
    const pegaBlock = historyModal.monitoramento2.filter((el) => {


      if (el.idVinculo == verifica[0]) {

        if (el.resultado == 'Bloqueado') {
          return el
        }

      }

    })
    bloquiado.push(pegaBlock)
    console.log(bloquiado)
    tabelaBlock = pegaBlock.map((el) => {
      return (
        <tr>
          <td>{el.analista}</td>
          <td>{el.dataMonitoramento}</td>
          <td>{el.idMonitoramento}</td>
          <td>{el.idVinculo}</td>
          <td>{el.parecerAnalise}</td>
          <td>{el.resultado}</td>
        </tr>
      )
    })



  } 


  return (

    <div id="myModal" className={styles.modal} style={style}>

      <div className={styles.modalContent} >
        <div className={styles.modalHeader}>
          <span className={styles.close} onClick={AbrirFechar}>&times;</span>
          <h2>Historicos analise</h2>
        </div>
        <div className={styles.modalBody}>
          {tabelaBlock != undefined &&
          <table>

          <thead>
            <tr>
              <th colSpan="6">historico Monitoramento</th>

            </tr>
            <tr>
              <th >analista Monitoramento</th>
              <th >data Monitoramento</th>
              <th >id Monitoramento</th>
              <th >id vinculo</th>
              <th >parecer analise</th>
              <th >resultado</th>


            </tr>
          </thead>
          <tbody>

            {tabelaBlock}

          </tbody>
        </table>
          }
          {tabelaBlock == undefined &&
          <div><h1>Sem registros de historico no momento</h1></div>
          }
          
        </div>
        
      </div>

    </div>





  )
}