import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './main-page-shows.css';

function MainShows(){

    const [shows, setShows] = useState([]);
    const [selectedShow, setSelectedShow] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchShows = async () => {
            try {
                const response = await fetch("http://localhost:3000/shows");
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setShows(data);
            } catch (error) {
                console.error('Error fetching shows:', error);
            }
        };

        fetchShows();
    }, []);

    const routeChangeToBooks = () => {
        let path = "/books";
        navigate(path);
    };

    const routeChangeToMovies = () => {
        let path = "/movies";
        navigate(path);
    };

    const handleClick = (show) => {
        setSelectedShow(show);
    };

    return (
        <div id="mainPageShows">
            <header>
                <div id="headerShow">
                    <div id="headerMainShowsTitle">
                        <font size="50">Movie Knight</font>
                    </div>

                    <div id="navMoviesBooksShows">
                        <div className="NavButtons">
                            <a onClick={() => routeChangeToMovies()} className="NavButtonsBut">Movies</a>
                        </div>
                        <div id="currentPageNavCont" className="NavButtons">
                            <span id="currentPageNav" className="NavButtonsBut">Shows</span>
                        </div>
                        <div className="NavButtons">
                            <a onClick={() => routeChangeToBooks()} className="NavButtonsBut">Books</a>
                        </div>
                    </div>
                </div>
            </header>

            <main>
                <div id="mainContShows">
                    <div id="listShowsClickCont">
                        <div id="listShowsClick">
                            <ul>
                                {shows.map((show, index) => (
                                    <li key={index} onClick={() => handleClick(show)}>
                                        <font size="5">{show.show_name}</font>
                                    </li>
                                ))}
                                <li>
                                    <font id="plusButton" size="6"><b>+</b></font>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div id="showInfoCont">
                        {selectedShow && (
                            <div id="showsInfo">
                                <font size="8" >{selectedShow.show_name}</font>
                                <h2 className="infoShows">Release Year: {selectedShow.release_year}</h2>
                                <h2 className="infoShows">Genre: {selectedShow.genre}</h2>
                                <h2 className="infoShows">Grade: {selectedShow.rating}</h2>
                                <h2 className="infoShows">Number of episodes: {selectedShow.episodes}</h2>
                            </div>
                        )}
                    </div>
                </div>
            </main>

            <footer>
                <div id="footerMainMov">
                    <p id="logoFooterMainShows"> &copy; 2024 Marin Grabovac</p>
                </div>
            </footer>
        </div>
    );
}

export default MainShows;
