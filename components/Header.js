import styles from './Header.module.css'

export default function Header({ title }) {
  return <header  className={styles.header}>
    <img src="/logo.svg" alt="Strange Goose Logo" className={styles.logo} />
    {title}
  </header>
}
