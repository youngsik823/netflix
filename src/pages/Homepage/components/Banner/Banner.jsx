import React, { useEffect, useState } from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import Alert from "react-bootstrap/Alert";
import "./Banner.style.css";

const Banner = () => {
    const [randomNumber, setRandomNumber] = useState(null);
    const { data, isLoading, isError, error } = usePopularMoviesQuery();

    useEffect(() => {
        if (data && data.results && data.results.length > 0) {
            const randomNum = Math.floor(Math.random() * data.results.length);
            setRandomNumber(randomNum);
        }
    }, [data]);

    if (isLoading) {
        return <h1>Loading</h1>;
    }

    if (isError) {
        return <Alert variant="danger">{error.message}</Alert>;
    }

    if (!data || randomNumber === null || !data.results[randomNumber]) {
        return null;
    }

    const selectedMovie = data.results[randomNumber];

    return (
        <div
            style={{
                backgroundImage: `url(https://media.themoviedb.org/t/p/original${selectedMovie.backdrop_path})`,
            }}
            className="banner"
        >
            <div className="text-white banner-text-area">
                <h1>{selectedMovie.title}</h1>
                <p>{selectedMovie.overview}</p>
            </div>
        </div>
    );
};

export default Banner;
