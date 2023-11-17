import styles from '../styles/navbar.module.css'

function SignUpButton({ text, icon }) {
  return (
    <button className={styles.signup}>
      <span className={styles.text}>Atakan Demir</span>
      <img src="/images/ProfilePic.png" alt="Icon" className={styles.icon} />
    </button>
  )
}

function LoginArea() {
  const isLoggedIn = false
  return (
    <div className={styles.loginsignup}>
      {!isLoggedIn ? <button className={styles.login}>Üye ol</button> : null}
      <SignUpButton />
    </div>
  )
}

export default LoginArea
