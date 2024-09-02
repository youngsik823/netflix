import React from "react";
import "./Homepage.style.css";
import Banner from "./components/Banner/Banner";
import KoreaMovieSlide from "./components/KoeraMovieSlide/koreaMovieSlide";
import PopularMovieSlide from "./components/PopularMovieSlide/PopularMovieSlide";
import UpcomingMovieSlide from "./components/UpcomingMovieSlide/UpcomingMovieSlide";


const Homepage = () => {
    return <div className="homepage-container">
        <Banner/>
        <KoreaMovieSlide/>
        <PopularMovieSlide/>
        <UpcomingMovieSlide/>
    </div>;
};

export default Homepage;
