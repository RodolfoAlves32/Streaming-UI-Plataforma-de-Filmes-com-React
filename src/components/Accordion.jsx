import { useState } from 'react';
import './Accordion.css';
import { FiPlus, FiX } from 'react-icons/fi';

const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="accordion-item">
            <button className="accordion-title" onClick={() => setIsOpen(!isOpen)}>
                <span>{title}</span>
                {isOpen ? <FiX size={24} /> : <FiPlus size={24} />}
            </button>
            <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
                <p>{content}</p>
            </div>
        </div>
    );
};
export default Accordion;
