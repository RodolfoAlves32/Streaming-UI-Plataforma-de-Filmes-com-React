import { useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ListContext } from '../../context/ListContext';
import { FiPlus, FiCheck, FiPlay } from 'react-icons/fi';
import './MovieDetails.css';

const MovieDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { movie } = location.state || {};
    const { addToList, removeFromList, isInList } = useContext(ListContext);

    if (!movie) {
        return (
            <div className="container-not-found">
                <h2>Filme não encontrado</h2>
                <button onClick={() => navigate('/home')}>Voltar</button>
            </div>
        );
    }

    const inList = isInList(movie.id);

    const handleListToggle = () => {
        if (inList) {
            removeFromList(movie.id);
        } else {
            addToList(movie);
        }
    };

    const imagePath = movie.backdrop_path || movie.poster_path;
    const bgImage = imagePath?.startsWith('http')
        ? imagePath
        : `https://image.tmdb.org/t/p/original${imagePath}`;

    return (
        <div className="movie-details-container fade-in">
            <div
                className="movie-backdrop"
                style={{
                    backgroundImage: `url("${bgImage}")`
                }}
            >
                <div className="backdrop-overlay"></div>
            </div>

            <div className="movie-content">
                <h1 className="movie-title">{movie.title || movie.name || movie.original_name}</h1>

                <div className="movie-meta">
                    <span className="movie-match">Relevância: {Math.round(movie.vote_average * 10)}%</span>
                    <span className="movie-year">{movie.release_date?.substring(0, 4) || movie.first_air_date?.substring(0, 4)}</span>
                </div>

                <p className="movie-overview">
                    {movie.overview || 'Sinopse não disponível para este título.'}
                </p>

                <div className="movie-actions">
                    <button className="play-button">
                        <FiPlay size={24} fill="black" /> Assistir
                    </button>
                    <button className="list-button" onClick={handleListToggle}>
                        {inList ? <FiCheck size={24} /> : <FiPlus size={24} />}
                        <span>{inList ? 'Na Minha Lista' : 'Minha Lista'}</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;
