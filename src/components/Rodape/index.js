import styles from './Rodape.module.css';
import logo from './logo.png'

function Rodape() {
    return (
        <footer className={styles.rodape}>
            <img className={styles.logo} src={logo} alt='Logo do AluraFlix'></img>
        </footer>
    )
}

export default Rodape;