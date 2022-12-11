import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react'
import { Player } from '../types/Player'

type playerContextType = {
  playerSelected: Player | null
  setPlayerSelected: Dispatch<SetStateAction<Player | null>>
}

const playerContextDefaultValues: playerContextType = {
  playerSelected: null,
  setPlayerSelected: player => player,
}

const PlayerContext = createContext<playerContextType>(
  playerContextDefaultValues
)

export function usePlayer() {
  return useContext(PlayerContext)
}

type Props = {
  children: ReactNode
}

export function PlayerProvider({ children }: Props) {
  const [playerSelected, setPlayerSelected] = useState<Player | null>(null)

  const value = { playerSelected, setPlayerSelected }
  return (
    <>
      <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
    </>
  )
}
