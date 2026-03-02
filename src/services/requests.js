// Retrieve API key from Env or use placeholder. Without key, API calls will fail.
const API_KEY = import.meta.env.VITE_TMDB_API_KEY || 'dummy_key';

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=pt-BR`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=pt-BR`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=pt-BR`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=pt-BR`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&language=pt-BR`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99&language=pt-BR`,
};

export default requests;
