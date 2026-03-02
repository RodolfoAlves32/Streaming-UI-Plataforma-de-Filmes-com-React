import { useState, useEffect } from 'react';
import axios from '../services/api';
import './Row.css';
import { MOCK_MOVIES } from '../services/mockData';
import { useNavigate } from 'react-router-dom';

const base_url = "https://image.tmdb.org/t/p/original/";

const fallbackImg = 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="300" height="450"><rect width="100%" height="100%" fill="#222"/><text x="50%" y="50%" fill="#666" font-family="sans-serif" font-size="24" text-anchor="middle" dy=".3em">NETFLIX</text></svg>');

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            try {
                const request = await axios.get(fetchUrl);
                if (request.data.results && request.data.results.length > 0) {
                    setMovies(request.data.results);
                } else {
                    // Randomize the mock movies so each row looks different
                    setMovies([...MOCK_MOVIES].sort(() => Math.random() - 0.5));
                }
            } catch (error) {
                console.error("Failed to fetch movies, using fallback data.");
                setMovies([...MOCK_MOVIES].sort(() => Math.random() - 0.5));
            }
        }
        fetchData();
    }, [fetchUrl]);

    const handleClick = (movie) => {
        navigate(`/movie/${movie.id}`, { state: { movie } });
    };

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row-posters">
                {movies.map((movie) => {
                    const imagePath = isLargeRow ? movie.poster_path : movie.backdrop_path;
                    if (!imagePath) return null;

                    const src = imagePath.startsWith('http') ? imagePath : `${base_url}${imagePath}`;

                    return (
                        <div
                            className={`row-item ${isLargeRow ? "large" : ""}`}
                            key={movie.id}
                            onClick={() => handleClick(movie)}
                        >
                            <img
                                className="row-poster"
                                src={src}
                                alt={movie.name || movie.title}
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = fallbackImg;
                                }}
                            />
                            <div className="row-item-info">
                                <div className="row-item-actions">
                                    <button className="play-btn">▶</button>
                                    <button className="add-btn">+</button>
                                </div>
                                <h4>{movie.name || movie.title}</h4>
                                <p className="overview">
                                    {movie.overview ? movie.overview.substring(0, 60) + '...' : ''}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default Row;
