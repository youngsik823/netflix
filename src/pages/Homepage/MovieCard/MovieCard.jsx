import React from "react";
import "./MovieCard.style.css";
import { Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faUser, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

const MovieCard = ({ movie }) => {
    return (
        <div
            style={{
                backgroundImage:
                    "url(" +
                    `https://media.themoviedb.org/t/p/original${movie.backdrop_path}` +
                    ")",
            }}
            className="movie-card"
        >
            <div className="overlay">
                <h1 className="card-title">{movie.title}</h1>
                <div className="card-genre-box">
                    {movie.genre_ids.map((id) => (
                        <Badge className="card-genre">{id}</Badge>
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

export default MovieCard;
