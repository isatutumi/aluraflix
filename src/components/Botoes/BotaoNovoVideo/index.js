import styles from './BotaoNovoVideo.module.css';

function BotaoNovoVideo({onClick, children}) {
    return (
        <button className={styles.botao} onClick={onClick}>
            {children}
        </button>
    )    
}

export default BotaoNovoVideo;