import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './main-page-shows.css';

function MainShows() {
    const [shows, setShows] = useState([]);
    const [selectedShow, setSelectedShow] = useState(null);
    const [showAddShow, setShowAddShow] = useState(false);
    const [newShow, setNewShow] = useState({
        name: '',
        genre: '',
        grade: '',
        episodes: '',
        users: '',
        year: ''
    });

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

    const handleClick = (show) => {
        setSelectedShow(prevSelectedShow => prevSelectedShow === show ? null : show);
    };

    const handleAddShowClick = () => {
        setShowAddShow(true);
    };

    const handleAddShow = async () => {
        try {
            console.log('Adding show:', newShow);
            const response = await fetch("http://localhost:3000/shows", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newShow)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const addedShow = await response.json();
            console.log('Show added:', addedShow);

            setShows([...shows, addedShow]);
            setNewShow({
                name: '',
                genre: '',
                grade: '',
                episodes: '',
                users: '',
                year: ''
            });
            setShowAddShow(false);
            window.location.reload();
        } catch (error) {
            console.error('Error adding show:', error);
        }
    };

    const handleCancelAddShow = () => {
        setShowAddShow(false);
        setNewShow({
            name: '',
            genre: '',
            grade: '',
            episodes: '',
            users: '',
            year: ''
        });
    };

    const handleDeleteShow = async () => {
        if (!selectedShow) {
            console.error('No show selected for deletion');
            return;
        }
    
        try {
            const response = await fetch(`http://localhost:3000/shows/${selectedShow.idshows}`, {
                method: 'DELETE'
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            setShows((prevShows) => prevShows.filter(show => show.idshows !== selectedShow.idshows));
            setSelectedShows(null);
        } catch (error) {
            console.error('Error deleting show:', error);
        }
    };

    const routeChangeToBooks = () => navigate("/books");
    const routeChangeToMovies = () => navigate("/movies");

    return (
        <div id="mainPageShows">
            <header>
                <div id="headerShow">
                    <div id="headerMainShowsTitle">
                        <font size="50">Movie Knight</font>
                    </div>
                    <nav id="navMoviesBooksShows">
                        <div className="NavButtons">
                            <a onClick={routeChangeToMovies} className="NavButtonsBut">Movies</a>
                        </div>
                        <div id="currentPageNavCont" className="NavButtons">
                            <span id="currentPageNav" className="NavButtonsBut">Shows</span>
                        </div>
                        <div className="NavButtons">
                            <a onClick={routeChangeToBooks} className="NavButtonsBut">Books</a>
                        </div>
                    </nav>
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
                                <li onClick={handleAddShowClick}>
                                    <font id="plusButton" size="6">
                                        <b>+</b>
                                    </font>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div id="showInfoCont">
                        {!showAddShow && selectedShow && (
                            <div id="showsInfo">
                                <font size="8">{selectedShow.show_name}</font>
                                <h2 className="infoShows">Release Year: {selectedShow.release_year}</h2>
                                <h2 className="infoShows">Genre: {selectedShow.genre}</h2>
                                <h2 className="infoShows">Grade: {selectedShow.rating}</h2>
                                <h2 className="infoShows">Number of Episodes: {selectedShow.episodes}</h2>
                                <div id="buttons">
                                    <button id="deleteButton" onClick={handleDeleteShow}>Delete</button>
                                    <button id="updateButton">Update</button>
                                </div>
                            </div>
                        )}

                        {showAddShow && (
                            <div id="addShowForm">
                                <div className="kontInput">
                                    <div className="inputAdding">
                                        <label htmlFor="name">Name</label>
                                        <input
                                            type="text"
                                            value={newShow.name}
                                            onChange={(e) => setNewShow({ ...newShow, name: e.target.value })}
                                            placeholder="Show Name"
                                            name="name"
                                        />
                                    </div>
                                    <div className="inputAdding">   
                                        <label htmlFor="year">Year</label>
                                        <input
                                            type="text"
                                            value={newShow.year}
                                            onChange={(e) => setNewShow({ ...newShow, year: e.target.value })}
                                            placeholder="Release Year"
                                            name="year"
                                        />
                                    </div>
                                </div>
                                <div className="kontInput">
                                    <div className="inputAdding">
                                        <label htmlFor="genre">Genre</label>
                                        <input
                                            type="text"
                                            value={newShow.genre}
                                            onChange={(e) => setNewShow({ ...newShow, genre: e.target.value })}
                                            placeholder="Genre"
                                            name="genre"
                                        />
                                    </div>
                                    <div className="inputAdding">
                                        <label htmlFor="users">Users</label>
                                        <input
                                            type="text"
                                            value={newShow.users}
                                            onChange={(e) => setNewShow({ ...newShow, users: e.target.value })}
                                            placeholder="Users"
                                            name="users"
                                        />
                                    </div>
                                </div>
                                <div className="kontInput">
                                    <div className="inputAdding">  
                                        <label htmlFor="grade">Grade</label>
                                        <input
                                            type="text"
                                            value={newShow.grade}
                                            onChange={(e) => setNewShow({ ...newShow, grade: e.target.value })}
                                            placeholder="Grade"
                                            name="grade"
                                        />
                                    </div>
                                    <div className="inputAdding">
                                        <label htmlFor="episodes">Episodes</label>
                                        <input
                                            type="text"
                                            value={newShow.episodes}
                                            onChange={(e) => setNewShow({ ...newShow, episodes: e.target.value })}
                                            placeholder="Number of Episodes"
                                            name="episodes"
                                        />
                                    </div>
                                </div>
                                <div className="kontInput">
                                    <button id="buttonAdd" onClick={handleAddShow}>Save</button>
                                    <button id="buttonCancel" onClick={handleCancelAddShow}>Cancel</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>

            <footer>
                <div id="footerMainMov">
                    <p id="logoFooterMainShows">&copy; 2024 Marin Grabovac</p>
                </div>
            </footer>
        </div>
    );
}

export default MainShows;
