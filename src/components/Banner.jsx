import { useState, useEffect } from 'react';
import axios from '../services/api';
import requests from '../services/requests';
import { MOCK_MOVIES } from '../services/mockData';
import './Banner.css';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const [movie, setMovie] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            try {
                const request = await axios.get(requests.fetchNetflixOriginals);
                const results = request.data.results;
                if (results && results.length > 0) {
                    setMovie(results[Math.floor(Math.random() * results.length - 1)]);
                } else {
                    setMovie(MOCK_MOVIES[Math.floor(Math.random() * MOCK_MOVIES.length)]);
                }
            } catch (error) {
                console.error("Failed to load banner movie, using fallback.");
                setMovie(MOCK_MOVIES[Math.floor(Math.random() * MOCK_MOVIES.length)]);
            }
        }
        fetchData();
    }, []);

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }

    const handlePlay = () => {
        if (movie) navigate(`/movie/${movie.id}`, { state: { movie } });
    };

    const bgImage = movie?.backdrop_path?.startsWith('http')
        ? movie.backdrop_path
        : `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`;

    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("${bgImage}")`,
                backgroundPosition: "center center",
            }}
        >
            <div className="banner-contents">
                <h1 className="banner-title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner-buttons">
                    <button className="banner-button" onClick={handlePlay}>Assistir</button>
                    <button className="banner-button dark">Minha Lista</button>
                </div>
                <h1 className="banner-description">
                    {truncate(movie?.overview || 'Assista a esta incrível série hoje!', 150)}
                </h1>
            </div>

            <div className="banner-fadeBottom" />
        </header>
    );
};
export default Banner;
