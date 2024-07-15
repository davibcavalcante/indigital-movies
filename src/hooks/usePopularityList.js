import { useState, useEffect } from "react";
import { getPopularityList } from "../utils/getMovies";

const usePopularityList = () => {
    const [movieList, setMovieList] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        const fetchMovie = async () => {
            setLoading(true);
            try {
                const newMovies = await getPopularityList(page);
                setMovieList(prevMovies => [...prevMovies, ...newMovies]);
            } catch (err) {
                setError(err);
                console.log('Erro ao carregar lista de filmes mais populares', err);
            } finally {
                setLoading(false);
                setIsFetching(false);
            }
        };

        fetchMovie();
    }, [page]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isFetching) {
                return;
            }
            setIsFetching(true);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isFetching]);

    useEffect(() => {
        if (!isFetching) return;
        setPage(prevPage => prevPage + 1);
    }, [isFetching]);

    const loadMoreMovies = () => {
        if (!loading) {
            setPage(prevPage => prevPage + 1);
        }
    };

    return { movieList, error, loading, page, loadMoreMovies };
};

export default usePopularityList;