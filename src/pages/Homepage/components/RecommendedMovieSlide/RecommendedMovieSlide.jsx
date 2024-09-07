import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "../../MovieCard/MovieCard";
import "./RecommendedMovieSlide.css";

const RecommendedMovieSlide = ({ movies }) => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 7,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <div>
            <h3 className="recommend-movie">추천 영화</h3>
            <Carousel
                infinite={true}
                centerMode={true}
                itemClass="movie-slider p-1"
                containerClass="carousel-container"
                responsive={responsive}
            >
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </Carousel>
        </div>
    );
};

export default RecommendedMovieSlide;
