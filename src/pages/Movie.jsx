import { useParams, Link } from "react-router-dom";
import useById from "../hooks/useById";
import { Calendar, Home, Star } from "lucide-react";

const Movie = () => {
    const { id } = useParams();

    const { movie, error, loading } = useById(id);

    if (loading) {
        return <div role="status" className="flex justify-center">
            <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg>
        </div>
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
                                <img src={`https://image.tmdb.org/t/p/original/${item.logo_path}`} alt={item.name} className="w-2/6 max-w-16 max-h-16 overflow-x-auto xl:w-1/6" />
                        )}
                    </section>
                </section>
            </section>
        </section>
    );
};

export default Movie;