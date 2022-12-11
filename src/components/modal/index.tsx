import Image from 'next/image'
import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { useModal } from '../../context/ModalContext'
import { usePlayer } from '../../context/PlayerContext'
import Nationality from './nationality'
import Overall from './overall'
import ChartRadar from './radar'
import {
  ChartContainer,
  CloseButton,
  ModalBody,
  ModalContainer,
  ModalOverlay,
} from './style'

const Modal = () => {
  const [isBrowser, setIsBrowser] = useState(false)
  const { showModal, setShowModal } = useModal()
  const { playerSelected } = usePlayer()

  useEffect(() => {
    setIsBrowser(true)
  }, [])

  const modalContent =
    showModal && playerSelected ? (
      <ModalOverlay>
        <ModalContainer>
          <CloseButton onClick={() => setShowModal(false)}>
            <span>X</span>
          </CloseButton>
          <ModalBody>
            <div className="card-info-top">
              <Image
                src={playerSelected?.photo}
                alt={playerSelected?.name}
                className="photo"
                width={180}
                height={180}
                loading={'lazy'}
                placeholder={'empty'}
              />
              <Overall value={playerSelected?.overall} />
            </div>
            <div className="card-info-bottom">
              <div className="name">
                <h6 className="title">Name</h6>
                <p className="value">{playerSelected?.name}</p>
              </div>
              <div>
                <h6 className="title">Position</h6>
                <p className="value">{playerSelected?.position}</p>
              </div>
              <div>
                <h6 className="title">Age</h6>
                <p className="value">{playerSelected?.age}</p>
              </div>
              <div>
                <h6 className="title">Height</h6>
                <p className="value">{`${playerSelected?.height}cm`}</p>
              </div>
              <div>
                <h6 className="title">Weight</h6>
                <p className="value">{`${playerSelected?.weight}kg`}</p>
              </div>
              <div className="team">
                <h6 className="title">Team:</h6>
                <p className="value">{playerSelected.team}</p>
              </div>
              <Nationality flag={playerSelected.flag} />
            </div>
            <ChartContainer className="chart-container">
              <ChartRadar
                PAS={playerSelected.PAS}
                VIS={playerSelected.VIS}
                DEF={playerSelected.DEF}
                DRI={playerSelected.DRI}
                PAC={playerSelected.PAC}
                PHY={playerSelected.PHY}
                SHO={playerSelected.SHO}
              />
            </ChartContainer>
          </ModalBody>
        </ModalContainer>
      </ModalOverlay>
    ) : null

  if (isBrowser) {
    const elementPortal = document.getElementById('modal-root')!
    return ReactDOM.createPortal(modalContent, elementPortal)
  } else {
    return null
  }
}

export default Modal
