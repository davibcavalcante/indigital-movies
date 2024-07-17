import { apiFetch } from "../axios/config";

export const getMostPopular = async () => {
    const results = await apiFetch.get('/discover/movie');
    return results.data.results[0];
}

export const getPopularityList = async (page) => {
    const results = await apiFetch.get(`/discover/movie?&sort_by=popularity.desc&page=${page}`);
    return results.data.results;
}

export const getMovieById = async (id) => {
    const results = await apiFetch.get(`/movie/${id}`);
    return results.data;
}