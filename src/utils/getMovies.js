import { apiFetch } from "../axios/config";

export const getMostPopular = async () => {
    const results = await apiFetch.get('/discover/movie?language=pt-BR');
    return results.data.results[0];
}

export const getPopularityList = async (page) => {
    const results = await apiFetch.get(`/discover/movie?&sort_by=popularity.desc&page=${page}&language=pt-BR`);
    return results.data.results;
}

export const getById = async (id) => {
    const results = await apiFetch.get(`/movie/${id}?language=pt-BR`);
    return results.data;
}

export const getByTitle = async (title) => {
    const results = await apiFetch.get(`/search/movie?query=${title}&language=pt-BR`);
    return results.data.results;
}