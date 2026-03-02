import Row from '../../components/Row';
import Banner from '../../components/Banner';
import requests from '../../services/requests';
import './Home.css';

const Home = () => {
    return (
        <div className="home fade-in">
            <Banner />

            <Row
                title="Originais Netflix"
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
            />
            <Row title="Em Alta" fetchUrl={requests.fetchTrending} />
            <Row title="Mais Votados" fetchUrl={requests.fetchTopRated} />
            <Row title="Ação" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comédia" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Terror" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="Documentários" fetchUrl={requests.fetchDocumentaries} />
        </div>
    );
};

export default Home;
