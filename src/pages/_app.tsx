import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ModalProvider } from '../context/ModalContext'
import { PlayerProvider } from '../context/PlayerContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PlayerProvider>
      <ModalProvider>
        <Component {...pageProps} />
      </ModalProvider>
    </PlayerProvider>
  )
}
