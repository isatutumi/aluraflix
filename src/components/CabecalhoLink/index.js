import BotaoHome from '../Botoes/BotaoHome';
import BotaoNovoVideo from '../Botoes/BotaoNovoVideo';
import { useNavigate } from 'react-router-dom';

function CabecalhoLink({tipo, url, children}) {
    const navigate = useNavigate();

    const renderButton = () => {
        switch (tipo) {
            case 'home':
                return <BotaoHome onClick={() => navigate(url)}>
                    {children}
                </BotaoHome>
            case 'novovideo':
                return <BotaoNovoVideo onClick={() => navigate(url)}>
                    {children}
                </BotaoNovoVideo>   
            default:
                return null;      
        }
    };

    return renderButton();
}


export default CabecalhoLink;