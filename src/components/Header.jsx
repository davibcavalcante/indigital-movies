import { Search, Video } from "lucide-react";
import { Link } from "react-router-dom";
import { getByTitle } from "../utils/getMovies";

const Header = ({ setMovies, setBySearch }) => {

    const getMoviesByTitle = async (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const movies = await getByTitle(title);

        if (movies && e.target.title.value.length > 0) {
            setMovies(movies);
            setBySearch(true);
        };
    };

    const setBySearchMode = (e) => {
        if (e.target.value.length < 1) setBySearch(false);
    };

    return (
        <section className="bg-red-600 w-full min-h-20 px-4 flex items-center justify-between lg:px-8 sticky top-0 z-50">
            <section className="text-white">
                <Link to={'/indigital-movies'} className="flex items-center gap-4">
                    <Video size={40} />
                    <h1 className="hidden text-sm font-light font-playwrite sm:block sm:text-xl">Indigital Movies</h1>
                </Link>
            </section>
            <section className="sm:w-1/2 sm:max-w-72 flex justify-end">
                <form autoComplete="off" className="flex items-center gap-2 w-full" onSubmit={getMoviesByTitle}>
                    <input type="text" name="title" autoComplete="off" placeholder="Busque um filme" className="p-1 rounded-md shadow-md flex-1 sm:px-2" onInput={setBySearchMode} />
                    <button type="submit" className="bg-white text-red-600 p-1 rounded-full shadow-lg flex items-center justify-center"><Search /></button>
                </form>
            </section>
        </section>
    );
};

export default Header;