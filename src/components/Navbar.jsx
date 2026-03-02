import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
    const [show, handleShow] = useState(false);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`nav ${show && user ? "nav-black" : ""}`}>
            <Link to={user ? "/home" : "/"}>
                <h1 className="nav-logo">NETFLIX</h1>
            </Link>

            {user && (
                <div className="nav-contents">
                    <Link to="/mylist" className="nav-link">Minha Lista</Link>
                    <img
                        onClick={() => navigate('/home')}
                        className="nav-avatar"
                        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                        alt="Avatar"
                    />
                </div>
            )}
        </div>
    );
};

export default Navbar;
