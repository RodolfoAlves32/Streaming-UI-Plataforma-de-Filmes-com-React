import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiCheck, FiX } from 'react-icons/fi';
import './Plans.css';

const plansData = [
    {
        name: 'Básico',
        price: 'R$18,90',
        quality: 'Boa',
        resolution: '720p',
        screens: 1,
        downloads: true,
    },
    {
        name: 'Padrão',
        price: 'R$39,90',
        quality: 'Ótima',
        resolution: '1080p',
        screens: 2,
        downloads: true,
    },
    {
        name: 'Premium',
        price: 'R$55,90',
        quality: 'Excepcional',
        resolution: '4K+HDR',
        screens: 4,
        downloads: true,
        isPopular: true
    }
];

const Plans = () => {
    const [selectedPlan, setSelectedPlan] = useState('Padrão');
    const navigate = useNavigate();

    const handleSelect = (e) => {
        e.preventDefault();
        navigate('/home');
    };

    return (
        <div className="plans-container fade-in">
            <div className="plans-header">
                <h1>Escolha o melhor plano para você</h1>
                <ul className="plans-benefits">
                    <li><FiCheck size={24} color="#E50914" /> <span>Assista o quanto quiser. Livre de anúncios.</span></li>
                    <li><FiCheck size={24} color="#E50914" /> <span>Recomendações especiais para você.</span></li>
                    <li><FiCheck size={24} color="#E50914" /> <span>Mude ou cancele seu plano quando quiser.</span></li>
                </ul>
            </div>

            <div className="plans-cards">
                {plansData.map(plan => (
                    <div
                        key={plan.name}
                        className={`plan-card ${selectedPlan === plan.name ? 'selected' : ''}`}
                        onClick={() => setSelectedPlan(plan.name)}
                    >
                        {plan.isPopular && <div className="popular-badge">Mais Popular</div>}
                        <h3>{plan.name}</h3>
                        <h4>{plan.price}<span>/mês</span></h4>
                        <div className="plan-details">
                            <p>Qualidade de vídeo: <b>{plan.quality}</b></p>
                            <p>Resolução: <b>{plan.resolution}</b></p>
                            <p>Telas simultâneas: <b>{plan.screens}</b></p>
                            <p>Downloads: <b>{plan.downloads ? <FiCheck color="#E50914" /> : <FiX />}</b></p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="plans-actions">
                <p className="plans-disclaimer">
                    A disponibilidade em HD, Full HD, Ultra HD e HDR está sujeita ao seu serviço de internet e às funcionalidades do aparelho.
                </p>
                <button className="plans-submit" onClick={handleSelect}>Começar</button>
            </div>
        </div>
    );
};
export default Plans;
