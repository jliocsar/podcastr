import { Header } from '../Header'
import { Player } from '../Player'

import styles from './styles.module.scss'

export function Layout({ children }) {
  return (
    <div className={styles.wrapper}>
      <main>
        <Header />
        {children}
      </main>
      <Player />
    </div>
  )
}
