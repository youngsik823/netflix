import React, { useEffect, useState } from "react";
import "./MoviePage.style.css";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import { useSearchParams } from "react-router-dom";
import { Alert, Col, Container, Row, Spinner } from "react-bootstrap";
import "../Homepage/MovieCard/MovieCard";
import MovieCard from "../Homepage/MovieCard/MovieCard";
import ReactPaginate from "react-paginate";
import { useMovieGenreQuery } from "../../hooks/useMovieGenreQuery";

const MoviePage = () => {
    const [query, setQuery] = useSearchParams();
    const keyword = query.get("q");
    const [page, setPage] = useState(1);
    const [selectedGenre, setSelectedGenre] = useState(null);
    const [filteredMovies, setFilteredMovies] = useState([]);

    const { data, isLoading, isError, error } = useSearchMovieQuery({
        keyword,
        page,
    });

    const { data: genreData } = useMovieGenreQuery();
    
    
    useEffect(() => {
        setPage(1);
        setSelectedGenre(null);
    }, [keyword]);

    useEffect(() => {
        if (data) {
            if (selectedGenre) {
                const filtered = data.results.filter((movie) =>
                    movie.genre_ids.includes(selectedGenre)
                );
                setFilteredMovies(filtered);
            } else {
                setFilteredMovies(data.results);
            }
        }
    }, [data, selectedGenre]);

    const handlePageClick = ({ selected }) => {
        setPage(selected + 1);
    };

    const genreClick = (genreId) => {
        setSelectedGenre(genreId);
    };

    if (isLoading) {
        return (
            <div className="spinner-area">
                <Spinner
                    animation="border"
                    variant="danger"
                    style={{ width: "5rem", height: "5rem" }}
                />
            </div>
        );
    }

    if (isError) {
        return <Alert variant="danger">{error.message}</Alert>;
    }

    return (
        <Container className="moviepage-container">
            <Row className="filter-content-box">
                <Col lg={4} xs={12} className="filter-col">
                    <Row className="movie-page-genre-row">
                        {genreData?.map((genre) => (
                            <Col
                                className={`movie-page-genre ${
                                    genre.id === selectedGenre ? "selected" : ""
                                }`}
                                key={genre.id}
                                onClick={() => genreClick(genre.id)}
                            >
                                {genre.name}
                            </Col>
                        ))}
                    </Row>
                </Col>
                <Col lg={8} xs={12} className="content-data">
                    <Row className="movie-page-box">
                        {data && filteredMovies.length > 0 ? (
                            filteredMovies.map((movie, index) => (
                                <Col key={index} className="movie-page-card">
                                    <MovieCard movie={movie} />
                                </Col>
                            ))
                        ) : (
                            <p className="movie-page-no-search">
                                검색 결과가 없습니다.
                            </p>
                        )}
                    </Row>
                    <div className="movie-pagination">
                        <ReactPaginate
                            nextLabel=">"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={3}
                            marginPagesDisplayed={2}
                            pageCount={data?.total_pages}
                            previousLabel="<"
                            pageClassName="page-item"
                            pageLinkClassName="page-link"
                            previousClassName="page-item"
                            previousLinkClassName="page-link"
                            nextClassName="page-item"
                            nextLinkClassName="page-link"
                            breakClassName="page-item"
                            breakLinkClassName="page-link"
                            containerClassName="pagination"
                            activeClassName="active"
                            renderOnZeroPageCount={null}
                            forcePage={page - 1}
                        />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default MoviePage;
