import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";
import fApi from "../utils/fApi";

const fetchMovieGenre = () => {
    return fApi.get("/genre/movie/list");
};

export const useMovieGenreQuery = () => {
    return useQuery({
        queryKey: ["movie-genre"],
        queryFn: fetchMovieGenre,
        select: (result) => result.data.genres,
        staleTime: 300000,
    });
};

