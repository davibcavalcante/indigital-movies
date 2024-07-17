import { useParams, Link } from "react-router-dom";
import useById from "../hooks/useById";
import { Calendar, Home, Star } from "lucide-react";
import Loading from "../components/Loading";

const Movie = () => {
    const { id } = useParams();

    const { movie, error, loading } = useById(id);

    if (loading) {
        return <div role="status" className="flex justify-center"><Loading/></div>
    }

    if (error) {
        return <section>Erro na requisição</section>
    }
    
    return (
        <section className={`relative h-screen overflow-y-auto py-12 px-4 md:flex md:items-center md:justify-center`}>
            <section className="fixed top-0 left-0 w-full h-full">
                <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="" className="min-h-full object-cover"/>
            </section>
            <section className="w-full max-w-96 m-auto h-fit flex flex-col rounded-2xl shadow-xl overflow-hidden z-50 md:flex-row md:w-11/12 md:max-w-none lg:w-9/12">
                <section className="w-full z-50 md:w-6/12 xl:w-4/12">
                    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} className="md:object-cover md:min-h-full" />
                </section>
                <section className="bg-zinc-900 opacity-95 w-full py-8 px-6 md:w-6/12 md:min-h-full md:max-w-full xl:w-8/12 xl:relative">
                    <h1 className="text-white text-3xl font-play mb-4 2xl:text-5xl">{movie.title}</h1>
                    <section className="mb-4 flex flex-col gap-2">
                        <h2 className="text-white text-xl font-raleway 2xl:text-2xl">PLOT:</h2>
                        <p className="text-white font-raleway 2xl:text-lg">{movie.overview}</p>
                    </section>
                    <section className="mb-8 flex justify-between">
                        <section className="flex justify-center">
                            <section className="text-amber-400 text-lg font-play flex items-center gap-2 sm:text-xl 2xl:text-2xl">
                                <Star size={25} />
                                {movie.vote_average.toFixed(1)}
                            </section>
                        </section>
                        <section className="text-white text-lg font-play flex items-center gap-2 sm:text-xl 2xl:text-2xl">
                            <Calendar size={25} />
                            {movie.release_date}
                        </section>
                    </section>
                    <section className="mb-8 flex items-center justify-between">
                        <Link to="/indigital-movies" className="bg-red-600 text-white flex items-center justify-center aspect-square p-2 rounded-full"><Home /></Link>
                        <Link to={movie.homepage} target="_blank" rel="external" className="bg-red-600 text-white font-semibold px-4 py-2 rounded-md">HOMEPAGE</Link>
                    </section>
                    <section className="bg-white p-4 rounded-xl shadow-xl flex items-center justify-center gap-4 xl:absolute xl:bottom-4 xl:left-1/2 xl:-translate-x-1/2 xl:w-10/12">
                        {movie.production_companies.map(item =>
                            item.logo_path !== null &&
                                <img src={`https://image.tmdb.org/t/p/original/${item.logo_path}`} alt={item.name} key={item.name} className="w-2/6 max-w-16 max-h-16 overflow-x-auto xl:w-1/6" />
                        )}
                    </section>
                </section>
            </section>
        </section>
    );
};

export default Movie;