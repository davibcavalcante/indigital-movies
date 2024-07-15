import { useState, useEffect } from "react";
import { getMostPopular } from "../utils/getMovies";

const useMostPopularMovie = () => {
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const movie = await getMostPopular();
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

export default useMostPopularMovie;