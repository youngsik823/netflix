import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";
import fApi from "../utils/fApi";
const fetchKoeraMovies = () => {
    return api.get("");
};
const fetchPopularMovies = () => {
    return fApi.get("/movie/popular");
};
const fetchUpcomingMovies = () => {
    return fApi.get("/movie/upcoming");
};

const fetchMovieDetail = (id) => {
    return fApi.get(`/movie/${id}`);
};

export const useKoreaMoviesQuery = () => {
    return useQuery({
        queryKey: ["movie-korea"],
        queryFn: fetchKoeraMovies,
        select: (result) => result.data,
    });
};

export const usePopularMoviesQuery = () => {
    return useQuery({
        queryKey: ["movie-popular"],
        queryFn: fetchPopularMovies,
        select: (result) => result.data,
    });
};
export const useUpcomingMoviesQuery = () => {
    return useQuery({
        queryKey: ["movie-upcoming"],
        queryFn: fetchUpcomingMovies,
        select: (result) => result.data,
    });
};

export const useMovieDetailQuery = ({ id }) => {
    return useQuery({
        queryKey: ["movie-korea-detail", {id}],
        queryFn: () => fetchMovieDetail(id),
        select: (result) => result.data,
    });
};
