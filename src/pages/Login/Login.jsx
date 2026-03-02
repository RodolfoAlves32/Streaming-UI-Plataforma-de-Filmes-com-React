import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password.length < 4 || password.length > 60) {
            setError('A senha deve ter entre 4 e 60 caracteres.');
            return;
        }
        // Simulate login
        login(email);
        navigate('/plans');
    };

    return (
        <div className="login-container">
            <div className="login-overlay"></div>
            <div className="login-content">
                <form className="login-form" onSubmit={handleSubmit}>
                    <h1>Entrar</h1>
                    {error && <div className="login-error">{error}</div>}
                    <input
                        type="email"
                        placeholder="Email ou número de telefone"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit" className="login-button">Entrar</button>

                    <div className="login-help">
                        <div className="remember-me">
                            <input type="checkbox" id="remember" defaultChecked />
                            <label htmlFor="remember">Lembre-se de mim</label>
                        </div>
                        <a href="#" className="need-help">Precisa de ajuda?</a>
                    </div>

                    <div className="login-footer">
                        <div className="facebook-login">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/480px-Facebook_logo_%28square%29.png" alt="Facebook" />
                            <span>Conectar com Facebook</span>
                        </div>
                        <p>
                            Novo por aqui? <b>Assine agora.</b>
                        </p>
                        <p className="recaptcha-terms">
                            Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô.
                            <a href="#"> Saiba mais.</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default Login;
