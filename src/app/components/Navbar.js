// components/Navbar.js

import styles from '../styles/navbar.module.css'
import LoginArea from './LoginArea'
import Logo from './Logo'

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        {/* Your logo component or image */}
        <a href="/"><Logo color="black"/></a>
      </div>
      <div className={styles.tabs}>
        <a href="#" className={styles.tab}>
          <span className={styles.text}>Keşfet</span>
          <img src="/icons/CaretDown.svg" alt="Icon" className={styles.icon} />
        </a>
        <a href="/sarachane" className={styles.tab}>
          Saraçhane
        </a>
        <a href="#" className={styles.tab}>
          Pazaryeri
        </a>
        <a href="#" className={styles.tab}>
          Ahırım
        </a>
      </div>
      {/* <div className={styles.loginsignup}>
        <button className={styles.login}>Üye ol</button>
        <button className={styles.signup}>Giriş yap</button>
      </div> */}
      <LoginArea />
    </div>
  )
}

export default Navbar
