import { useState } from "react";
import Header from "../components/Header";
import MostPopularMovie from "../components/Home/MostPopularMovie";
import MoviesList from "../components/Home/MoviesList";

const Home = () => {
    const [isBySearch, setIsBySearch] =  useState(false);
    const [movieList, setMovieList] = useState([]);

    const setMovies = (movies) => {
        setMovieList(movies);
    };

    const toggleIsBySearch = (booleanMode) => {
        setIsBySearch(booleanMode);
    };

    return (
        <section>
            <Header setMovies={setMovies} setBySearch={toggleIsBySearch} />
            <MostPopularMovie movieBySearch={movieList[0]} bySearch={isBySearch} />
            <MoviesList moviesBySearch={movieList} bySearch={isBySearch}/>
        </section>
    );
}

export default Home;