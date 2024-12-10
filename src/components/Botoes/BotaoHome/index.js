import styles from './BotaoHome.module.css';

function BotaoHome({onClick, children}) {
    return (
        <button className={styles.botao} onClick={onClick}>
            {children}
        </button>
    )
}

export default BotaoHome;