import axios from "axios";

export const apiFetch = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}` 
    }
})