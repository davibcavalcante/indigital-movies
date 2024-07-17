import { useState, useEffect } from "react";
import { getMovieById } from "../utils/getMovies";

const useById = (id) => {
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const movie = await getMovieById(id);
                setMovie(movie);
            } catch (err) {
                setError(err);
                console.log('Erro ao carregar filme mais popular', err)
            } finally {
                setLoading(false)
            }
        };

        fetchMovie();
    }, []);

    return { movie, error, loading };
};

export default useById;