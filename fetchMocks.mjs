import fs from 'fs';
import https from 'https';

https.get('https://api.tvmaze.com/shows', (res) => {
    let body = '';
    res.on('data', chunk => body += chunk);
    res.on('end', () => {
        const shows = JSON.parse(body).slice(0, 30);
        const mockData = shows.map(show => ({
            id: show.id,
            title: show.name,
            name: show.name,
            backdrop_path: show.image?.original || show.image?.medium || '',
            poster_path: show.image?.medium || show.image?.original || '',
            overview: (show.summary || 'Nenhuma sinopse disponível.').replace(/<[^>]+>/g, ''),
            vote_average: show.rating?.average || 8.0,
        }));

        // Add some predefined working TMDB paths for variety
        const predefined = [
            { id: 9001, title: 'Stranger Things', name: 'Stranger Things', backdrop_path: '/56v2KjBlU4XaOv9rVYEQypROD7P.jpg', poster_path: '/49WJfeN0moxb9IPfGn8mOaC0d5x.jpg', overview: 'Quando um garoto desaparece, seus amigos e a cidade...', vote_average: 8.6 },
            { id: 9002, title: 'Breaking Bad', name: 'Breaking Bad', backdrop_path: '/84XPpjGvxNyX45etCdy5b63D1W.jpg', poster_path: '/30erzlzIOtOK3k3T3BAl1GiVMP1.jpg', overview: 'Um professor de química descobre que tem câncer...', vote_average: 9.5 }
        ];

        const finalData = [...predefined, ...mockData];

        const content = `export const MOCK_MOVIES = ${JSON.stringify(finalData, null, 2)};\n`;
        fs.writeFileSync('./src/services/mockData.js', content);
        console.log('Successfully wrote mockData.js');
    });
});
