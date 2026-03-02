import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ListContext } from '../../context/ListContext';
import './MyList.css';

const base_url = "https://image.tmdb.org/t/p/original/";

const MyList = () => {
    const { myList } = useContext(ListContext);
    const navigate = useNavigate();

    const handleClick = (movie) => {
        navigate(`/movie/${movie.id}`, { state: { movie } });
    };

    return (
        <div className="mylist-container fade-in">
            <h1 className="mylist-title">Minha Lista</h1>

            {myList.length === 0 ? (
                <div className="mylist-empty">
                    <h2>Sua lista está vazia</h2>
                    <p>Adicione séries e filmes à sua lista para assistir mais tarde.</p>
                    <button onClick={() => navigate('/home')}>Buscar Filmes</button>
                </div>
            ) : (
                <div className="mylist-grid">
                    {myList.map(movie => (
                        <div key={movie.id} className="mylist-item" onClick={() => handleClick(movie)}>
                            <img
                                src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
                                alt={movie.title || movie.name}
                                className="mylist-poster"
                            />
                            <div className="mylist-item-overlay">
                                <h3>{movie.title || movie.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyList;
