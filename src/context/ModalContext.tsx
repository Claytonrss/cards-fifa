import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react'

type modalContextType = {
  showModal: boolean
  setShowModal: Dispatch<SetStateAction<boolean>>
}

const modalContextDefaultValues: modalContextType = {
  showModal: false,
  setShowModal: () => {},
}

const ModalContext = createContext<modalContextType>(modalContextDefaultValues)

export function useModal() {
  return useContext(ModalContext)
}

type Props = {
  children: ReactNode
}

export function ModalProvider({ children }: Props) {
  const [showModal, setShowModal] = useState(false)

  const value = { showModal, setShowModal }
  return (
    <>
      <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
    </>
  )
}
