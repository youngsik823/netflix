import { useQuery } from "@tanstack/react-query";
import fApi from "../utils/fApi"; 

const fetchMovieRecommendations = async (genreIds) => {
    if (!genreIds.length) return [];

    const response = await fApi.get(
        `/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreIds.join(",")}`
    );

    return response.data.results; 
};

export const useMovieRecommendationQuery = ({ genreIds }) => {
    return useQuery({
        queryKey: ["movieRecommendations", genreIds],
        queryFn: () => fetchMovieRecommendations(genreIds),
        select: (data) => data,
        enabled: genreIds.length > 0, 
    });
};
