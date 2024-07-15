import Header from "../components/Header";
import MostPopularMovie from "../components/Home/MostPopularMovie";
import MoviesList from "../components/Home/MoviesList";

const Home = () => {
    return (
        <section>
            <Header />
            <MostPopularMovie />
            <MoviesList />
        </section>
    );
}

export default Home;