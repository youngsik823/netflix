import React from "react";
import "./PopularMovieCard.style.css";
import { Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faStar,
    faUser,
    faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { useMovieGenreQuery } from "../../../hooks/useMovieGenreQuery";
import { useNavigate } from "react-router-dom";

const UpcomingMovieCard = ({ movie }) => {
    const { data: genreData } = useMovieGenreQuery();
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/movies/${movie.id}`);
      };
    const showGener = (genreIdList) => {
        if (!genreData) return [];
        const genreNameList = genreIdList.map((id) => {
            const genreObj = genreData.find((genre) => genre.id === id);
            return genreObj.name;
        });
        return genreNameList;
    };
    return (
        <div
            style={{
                backgroundImage:
                    "url(" +
                    `https://media.themoviedb.org/t/p/w533_and_h300_bestv2${movie.backdrop_path}` +
                    ")",
            }}
            className="movie-card"
            onClick={handleClick}
        >
            <div className="overlay">
                <h1 className="card-title">{movie.title}</h1>
                <div className="card-genre-box">
                    {showGener(movie.genre_ids).map((genre, index) => (
                        <Badge className="card-genre" key={index}>
                            {genre}
                        </Badge>
                    ))}
                </div>
                <div className="card-box-container">
                    <div className="card-box">
                        <div className="cart-text">
                            <FontAwesomeIcon
                                icon={faStar}
                                className="star-icon"
                            />
                            <div className="card-vote-c">
                                {movie.vote_average}
                            </div>
                        </div>
                        <div className="cart-text">
                            <FontAwesomeIcon icon={faUser} />
                            <div className="card-popularity">
                                {movie.popularity}
                            </div>
                        </div>
                        <div className="cart-text">
                            <FontAwesomeIcon icon={faTriangleExclamation} />
                            <div className="card-adult">
                                {movie.adult ? "over18" : "under18"}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default UpcomingMovieCard;
