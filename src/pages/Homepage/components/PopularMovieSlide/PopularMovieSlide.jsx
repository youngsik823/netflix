import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import { Alert } from "bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../PopularMovieSlide/PopularMovieSlide.style.css";
import PopularMovieCard from "../../MovieCard/PopularMovieCard";

const PopularMovieSlide = () => {
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
    const { data, isLoading, isError, error } = usePopularMoviesQuery();
    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    if (isError) {
        return <Alert varient="danger">{error.message}</Alert>;
    }
    

    return (
        <div>
            <h3>인기있는 영화</h3>
            <Carousel
                infinite={true}
                centerMode={true}
                itemClass="movie-slider p-1"
                containerClass="carousel-container"
                responsive={responsive}
            >
                {data?.results.map((movie, index) => (
                    <PopularMovieCard movie={movie} key={index} />
                ))}
            </Carousel>
        </div>
    );
};

export default PopularMovieSlide;
