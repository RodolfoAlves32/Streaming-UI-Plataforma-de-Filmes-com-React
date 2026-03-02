import { useNavigate } from 'react-router-dom';
import Accordion from '../../components/Accordion';
import './Landing.css';

const faqs = [
    {
        title: 'O que é a Netflix?',
        content: 'A Netflix é um serviço de transmissão online que oferece uma ampla variedade de séries, filmes e documentários premiados em milhares de aparelhos conectados à internet.'
    },
    {
        title: 'Quanto custa a Netflix?',
        content: 'Assista à Netflix no seu celular, tablet, Smart TV ou notebook por uma taxa mensal única. Os planos variam de R$18,90 a R$55,90 por mês. Sem contrato nem taxas extras.'
    },
    {
        title: 'Onde posso assistir?',
        content: 'Assista onde quiser, quando quiser. Faça login com sua conta Netflix em netflix.com para começar a assistir no computador ou em qualquer aparelho conectado à Internet.'
    },
    {
        title: 'Como faço para cancelar?',
        content: 'A Netflix é flexível. Não há contratos nem compromissos. Você pode cancelar a sua conta na internet com apenas dois cliques. Não há taxa de cancelamento.'
    }
];

const Landing = () => {
    const navigate = useNavigate();

    const handleStart = (e) => {
        e.preventDefault();
        navigate('/login');
    };

    return (
        <div className="landing-container">
            <div className="hero-section">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1>Filmes, séries e muito mais, sem limites</h1>
                    <h2>Assista onde quiser. Cancele quando quiser.</h2>
                    <p>Quer assistir? Informe seu email para criar ou reiniciar sua assinatura.</p>
                    <form className="email-form" onSubmit={handleStart}>
                        <input type="email" placeholder="Email" required />
                        <button type="submit">Vamos lá</button>
                    </form>
                </div>
            </div>

            <div className="divider"></div>

            <div className="feature-section">
                <div className="feature-text">
                    <h2>Aproveite na TV</h2>
                    <p>Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos.</p>
                </div>
                <div className="feature-image">
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="TV" />
                </div>
            </div>

            <div className="divider"></div>

            <div className="feature-section reverse">
                <div className="feature-image">
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="Mobile" />
                </div>
                <div className="feature-text">
                    <h2>Baixe séries para assistir offline</h2>
                    <p>Salve seus títulos favoritos e sempre tenha algo para assistir.</p>
                </div>
            </div>

            <div className="divider"></div>

            <div className="faq-section">
                <h2>Perguntas frequentes</h2>
                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <Accordion key={index} title={faq.title} content={faq.content} />
                    ))}
                </div>
                <p className="faq-email">Quer assistir? Informe seu email para criar ou reiniciar sua assinatura.</p>
                <form className="email-form" onSubmit={handleStart}>
                    <input type="email" placeholder="Email" required />
                    <button type="submit">Vamos lá</button>
                </form>
            </div>
            <div className="divider"></div>
        </div>
    );
};
export default Landing;
