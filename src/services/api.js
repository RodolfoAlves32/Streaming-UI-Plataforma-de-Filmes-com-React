import axios from 'axios';

// Create an axios instance
const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
});

export default api;
