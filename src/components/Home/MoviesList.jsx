import usePopularityList from "../../hooks/usePopularityList";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import Loading from "../Loading";

const MoviesList = ({ moviesBySearch, bySearch }) => {
    const { movieList, error, loading, loadMoreMovies, clearMovies } = usePopularityList(bySearch);

    if (loading && movieList.length === 0) return;

    if (error) {
        return <section>Erro na requisição</section>
    }

    const renderMoviesInSections = () => {
        const sections = [];

        if (bySearch) {
            for (let i = 0; i < moviesBySearch.length; i += 20) {
                sections.push(
                    <section key={i} className="flex flex-wrap justify-center gap-8">
                        {moviesBySearch.map((movie, index) => movie.poster_path && (
                            <div key={index}
                                className="min-w-full relative
                                        sm:min-w-0 sm:w-60 lg:duration-300 lg:hover:scale-110 lg:cursor-pointer">
                                <div className="text-white text-lg absolute bg-zinc-800 bg-opacity-80 w-fit top-2 left-2 rounded-xl shadow-xl flex items-center gap-2 p-2">
                                    <Star color="yellow" /> {movie.vote_average.toFixed(1)}
                                </div>
                                <Link to={`/indigital-movies/movie/${movie.id}`}>
                                    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} className="w-full h-auto" />
                                </Link>
                            </div>
                        ))}
                    </section>
                );
            }
        } else {
            for (let i = 0; i < movieList.length; i += 20) {
                const moviesChunk = movieList.slice(i, i + 20);
                sections.push(
                    <section key={i} className="flex flex-col gap-8">
                        <section className="flex gap-4 overflow-x-auto scrollbar pb-4">
                            {moviesChunk.map((movie, index) => index > 0 && (
                                <div key={index}
                                    className="min-w-full relative
                                        sm:min-w-32 md:min-w-40
                                        lg:min-w-52 lg:hover:min-w-56 lg:duration-300 lg:cursor-pointer">
                                    <div className="text-white text-lg absolute bg-zinc-800 bg-opacity-80 w-fit top-2 left-2 rounded-xl shadow-xl flex items-center gap-2 p-2">
                                        <Star color="yellow" /> {movie.vote_average.toFixed(1)}
                                    </div>
                                    <Link to={`/indigital-movies/movie/${movie.id}`}>
                                        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} className="w-full h-auto" />
                                    </Link>
                                </div>
                            ))}
                        </section>
                    </section>
                );
            }
        }
        return sections;
    };

    return (
        <section className="bg-black h-auto flex flex-col gap-8 px-4 pb-20 relative z-40 lg:px-8">
            {renderMoviesInSections()}
            <button className="bg-red-600 text-white w-3/4 m-auto py-2 lg:hidden" onClick={loadMoreMovies}>
                {!loading ? 'Mais...' : <Loading />}
            </button>
            {loading &&
                <section className="hidden lg:block">
                    <Loading />
                </section>}
        </section>
    );
};

export default MoviesList;