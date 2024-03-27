import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './main-page-movies.css';

function MainMovies(){

    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch("http://localhost:3000/movies");
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setMovies(data);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchMovies();
    }, []);

    const routeChangeToBooks = () => {
        let path = "/books";
        navigate(path);
    };

    const routeChangeToShows = () => {
        let path = "/shows";
        navigate(path);
    };

    const handleClick = (movie) => {
        setSelectedMovie(movie);
    };

    return (
        <div id="mainPageMovies">
            <header>
                <div id="headerMovie">
                    <div id="headerMainMoviesTitle">
                        <font size="50">Movie Knight</font>
                    </div>

                    <div id="navMoviesBooksShows">
                        <div id="currentPageNavCont" className="NavButtons">
                            <a id="currentPageNav" className="NavButtonsBut">Movies</a>
                        </div>
                        <div className="NavButtons">
                            <span onClick={() => routeChangeToShows()} className="NavButtonsBut">Shows</span>
                        </div>
                        <div className="NavButtons">
                            <a onClick={() => routeChangeToBooks()} className="NavButtonsBut">Books</a>
                        </div>
                    </div>
                </div>
            </header>

            <main>
                <div id="mainContMovies">
                    <div id="listMoviesClickCont">
                        <div id="listMoviesClick">
                            <ul>
                                {movies.map((movie, index) => (
                                    <li key={index} onClick={() => handleClick(movie)}>
                                        <font size="5">{movie.movie_name}</font>
                                    </li>
                                ))}
                                <li>
                                    <font id="plusButton" size="6"><b>+</b></font>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div id="movieInfoCont">
                        {selectedMovie && (
                            <div id="moviesInfo">
                                <font size="8" >{selectedMovie.movie_name}</font>
                                <h2 className="infoMovies">Release Year: {selectedMovie.movie_release_year}</h2>
                                <h2 className="infoMovies">Genre: {selectedMovie.movie_genre}</h2>
                                <h2 className="infoMovies">Grade: {selectedMovie.movie_grade}</h2>
                            </div>
                        )}
                    </div>
                </div>
            </main>

            <footer>
                <div id="footerMainMov">
                    <p id="logoFooterMainMovies"> &copy; 2024 Marin Grabovac</p>
                </div>
            </footer>
        </div>
    );
}

export default MainMovies;
