import logo from './logo.png';
import styles from './Cabecalho.module.css';
import { Link } from 'react-router-dom';
import CabecalhoLink from '../CabecalhoLink';

function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <Link to='./'>
                <img className={styles.logo} src={logo} alt='Logo do AluraFlix'></img>
            </Link>
            <nav>
                <CabecalhoLink tipo='home' url='./'>
                    Home
                </CabecalhoLink>
                <CabecalhoLink tipo='novovideo' url='/NovoVideo'>
                    Novo Vídeo
                </CabecalhoLink>
            </nav>
        </header>
    )
}

export default Cabecalho;