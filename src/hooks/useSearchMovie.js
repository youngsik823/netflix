import { useQuery } from "@tanstack/react-query";
import { keyboard } from "@testing-library/user-event/dist/keyboard";
import fApi from "../utils/fApi";

const fetchSearchMovie = ({ keyword, page }) => {
    return keyword
        ? fApi.get(`/search/movie?query=${keyword}&page=${page}`)
        : fApi.get(`/movie/popular?page=${page}`);
};

export const useSearchMovieQuery = (keyword, page) => {
    return useQuery({
        queryKey: ["movie-search", { keyword, page }],
        queryFn: () => fetchSearchMovie( keyword, page ),
        select: (result) => result.data,
    });
};
