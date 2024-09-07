import { useQuery } from "@tanstack/react-query";
import fApi from "../utils/fApi"; // 올바르게 설정된 fApi 임포트

const fetchMovieRecommendations = async (genreIds) => {
    if (!genreIds.length) return [];

    const response = await fApi.get(
        `/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreIds.join(",")}`
    );

    return response.data.results; // 추천 영화 결과 반환
};

export const useMovieRecommendationQuery = ({ genreIds }) => {
    return useQuery({
        queryKey: ["movieRecommendations", genreIds],
        queryFn: () => fetchMovieRecommendations(genreIds),
        select: (data) => data, // API 응답의 결과 전체를 선택
        enabled: genreIds.length > 0, 
    });
};
