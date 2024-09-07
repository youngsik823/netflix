import React from "react";
import { useParams } from "react-router-dom";
import "./MovieDetailPage.style.css";
import { useMovieDetailQuery } from "../../hooks/usePopularMovies";
import { useMovieGenreQuery } from "../../hooks/useMovieGenreQuery";
import { useMovieRecommendationQuery } from "../../hooks/useMovieRecommendationQuery";
import RecommendedMovieSlide from "../Homepage/components/RecommendedMovieSlide/RecommendedMovieSlide.jsx"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faUser, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

const MovieDetailPage = () => {
    const { id } = useParams();
    const { data, isLoading, isError } = useMovieDetailQuery({ id });
    const { data: genreData } = useMovieGenreQuery();
    const genreIds = data?.genres.map(genre => genre.id) || [];
    const { data: recommendations, isLoading: isLoadingRecommendations, isError: isErrorRecommendations } = useMovieRecommendationQuery({ genreIds });

    const showGener = (genreIdList) => {
        if (!genreData) return [];
        return genreIdList.map((id) => {
            const genreObj = genreData.find((genre) => genre.id === id);
            return genreObj ? genreObj.name : '';
        });
    };

    if (isLoading || isLoadingRecommendations) {
        return <h1>Loading...</h1>;
    }

    if (isError || isErrorRecommendations || !data) {
        return <h1>Error loading movie details</h1>;
    }

    return (
        <div className="movie-detail-container">
            <div className="movie-detail-wrap">
                <div className="movie-detail-context">
                    <div
                        className="movie-detail-img"
                        style={{
                            backgroundImage:
                                `url(https://media.themoviedb.org/t/p/original${data.backdrop_path})`,
                        }}
                    ></div>
                    <div className="movie-detail-description">
                        <h1>{data.original_title}</h1>
                        <p className="d-d">{data.release_date}</p>
                        <p className="d-d">
                            <b>Overview:</b> {data.overview}
                        </p>
                        <p className="d-d">
                            <b>Genre:</b>
                            {showGener(data.genres.map((genre) => genre.id)).map((genre, index) => (
                                <div className="movie-detail-genre" key={index}>
                                    {genre}
                                </div>
                            ))}
                        </p>
                        <p className="d-d"><b>runtime: </b>{data.runtime}</p>
                        <div className="cart-text">
                            <FontAwesomeIcon icon={faStar} className="star-icon" />
                            <div className="card-vote-c">
                                {data.vote_average}
                            </div>
                        </div>
                        <div className="cart-text">
                            <FontAwesomeIcon icon={faUser} />
                            <div className="card-popularity">
                                {data.popularity}
                            </div>
                        </div>
                        <div className="cart-text">
                            <FontAwesomeIcon icon={faTriangleExclamation} />
                            <div className="card-adult">
                                {data.adult ? "over18" : "under18"}
                            </div>
                        </div>
                    </div>
                </div>
                <RecommendedMovieSlide movies={recommendations} />
            </div>
        </div>
    );
};

export default MovieDetailPage;
