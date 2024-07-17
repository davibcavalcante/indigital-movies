import { Link } from "react-router-dom";
import useMostPopularMovie from "../../hooks/useMostPopularMovie";
import Loading from "../Loading";

const MostPopularMovie = ({ movieBySearch, bySearch }) => {
    const { mostPopularMovie, error, loading } = useMostPopularMovie();

    const movie = bySearch ? movieBySearch : mostPopularMovie;

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <section>Erro na requisição</section>
    }

    return (
        <section
            className={`min-h-home h-auto p-4 relative
            after:absolute after:w-full after:h-full after:bg-gradient-to-t after:from-black after:from-10% after:to-transparent after:top-0 after:left-0`}>
            <section className="fixed top-0 left-0 w-full h-full">
                <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="" className="min-h-full object-cover" />
            </section>
            <section className="w-full absolute bottom-40 left-1/2 -translate-x-1/2 z-40 sm:bottom-20">
                <h1 className="text-white text-3xl text-center font-play font-semibold sm:text-5xl lg:text-7xl">{movie.title}</h1>
                <h2 className="text-zinc-400 text-xl text-center font-raleway sm:text-2xl lg:text-3xl">{movie.release_date}</h2>
                <Link to={`/indigital-movies/movie/${movie.id}`} className="bg-red-600 text-white text-xl font-raleway font-bold block w-fit mx-auto my-4 px-6 py-1 rounded-sm shadow-xl lg:text-2xl">
                    Ver Mais
                </Link>
            </section>
        </section>
    );
};

export default MostPopularMovie;