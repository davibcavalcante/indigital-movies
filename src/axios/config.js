import axios from "axios";

export const apiFetch = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYjIxZDAwMzc3NDU4NmNmNzkwNzI1ZThjMWVmNDExZCIsIm5iZiI6MTcyMDk5OTE1NC4yMTU4NCwic3ViIjoiNjRhNDBmZmRlOGQwMjgwMGUyZDgzZTBmIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.5lBUxad91wtfHL9Ys_F58JaCuLFTRdY4gQWkyFLd6RA'
    }
})