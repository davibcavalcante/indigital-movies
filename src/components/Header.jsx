import { Film, Search, Video } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <section className="bg-red-600 w-full min-h-20 px-4 flex items-center justify-between lg:px-8 sticky top-0 z-50">
            <section className="text-white">
                <Link to={'/'} className="flex items-center gap-4">
                    <Video size={40} />
                    <h1 className="hidden text-sm font-light font-playwrite sm:block sm:text-xl">Indigital Movies</h1>
                </Link>
            </section>
            <section className="sm:w-1/2 sm:max-w-72 flex justify-end">
                <form autoComplete="off" className="flex items-center gap-2 w-full">
                    <input type="text" autoComplete="off" placeholder="Busque um filme" className="p-1 rounded-md shadow-md flex-1 sm:px-2" />
                    <button type="submit" className="bg-white text-red-600 p-1 rounded-full shadow-lg flex items-center justify-center"><Search /></button>
                </form>
            </section>
        </section>
    );
};

export default Header;