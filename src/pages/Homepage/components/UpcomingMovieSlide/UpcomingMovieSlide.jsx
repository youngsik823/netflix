import React from "react";
import { useUpcomingMoviesQuery } from "../../../../hooks/usePopularMovies";
import { Alert } from "bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../PopularMovieSlide/PopularMovieSlide.style.css";
import UpcomingMovieCard from "../../MovieCard/UpcomingMovieCard";

const UpcomingMovieSlide = () => {
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
    const { data, isLoading, isError, error } = useUpcomingMoviesQuery();

    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    if (isError) {
        return <Alert varient="danger">{error.message}</Alert>;
    }
    return (
        <div>
            <h3>곧 다가오는 영화</h3>
            <Carousel
                infinite={true}
                centerMode={true}
                itemClass="movie-slider p-1"
                containerClass="carousel-container"
                responsive={responsive}
            >
                {data &&
                    data?.results.map((movie, index) => (
                        <UpcomingMovieCard movie={movie} key={index} />
                    ))}
            </Carousel>
        </div>
    );
};

export default UpcomingMovieSlide;
