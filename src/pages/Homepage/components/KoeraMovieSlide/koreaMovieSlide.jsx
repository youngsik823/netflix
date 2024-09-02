import React from "react";
import { useKoreaMoviesQuery } from "../../../../hooks/usePopularMovies";
import { Alert } from "bootstrap";
import "./KoreaMovieSlide.style.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "../../MovieCard/MovieCard";

const KoreaMovieSlide = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 7,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 7,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    const { data, isLoading, isError, error } = useKoreaMoviesQuery();
    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    if (isError) {
        return <Alert varient="danger">{error.message}</Alert>;
    }

    return (
        <div>
            <h3>한국영화</h3>
            <Carousel
                infinite={true}
                centerMode={true}
                itemClass="movie-slider p-1"
                containerClass="carousel-container"
                responsive={responsive}
            >
                {data.results.map((movie, index) => (
                    <MovieCard movie={movie} key={index} />
                ))}
            </Carousel>
        </div>
    );
};

export default KoreaMovieSlide;
