import { useQuery } from "@tanstack/react-query";
import fApi from "../utils/fApi";

const fetchReviews = async (movieId) => {
    if (!movieId) return [];
    const response = await fApi.get(`/movie/${movieId}/reviews`);
    return response.data.results;
};

export const useMovieReviewQuery = (movieId) => {
    return useQuery({
        queryKey: ["movieReviews", movieId],
        queryFn: () => fetchReviews(movieId),
        enabled: !!movieId, // Only fetch reviews if movieId is provided
    });
};
