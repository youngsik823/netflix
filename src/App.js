import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Homepage from "./pages/Homepage/Homepage";
import MoviePage from "./pages/Movies/MoviePage";
import MovieDetailPage from "./pages/MovieDetail/MovieDetailPage";
import { useState } from "react";

function App() {
    return (
        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route index element={<Homepage />}></Route>
                <Route path="movies">
                    <Route index element={<MoviePage />}></Route>
                    <Route path=":id" element={<MovieDetailPage />}></Route>
                </Route>
            </Route>

            <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
    );
}

export default App;
