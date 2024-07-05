import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './main-page-movies.css';

function MainMovies() {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [showAddMovie, setShowAddMovie] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editableMovie, setEditableMovie] = useState(null);
    const [newMovie, setNewMovie] = useState({
        name: '',
        year: '',
        grade: '',
        genre: '',
        user: ''
    });

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

    const handleClick = (movie) => {
        setSelectedMovie(prevSelectedMovie => prevSelectedMovie === movie ? null : movie);
    };

    const handleAddMovieClick = () => {
        setShowAddMovie(true);
    };

    const handleAddMovie = async () => {
        try {
            const response = await fetch("http://localhost:3000/movies", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newMovie)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const addedMovie = await response.json();

            setMovies([...movies, addedMovie]);
            setNewMovie({
                name: '',
                year: '',
                grade: '',
                genre: '',
                user: ''
            });
            setShowAddMovie(false);
            window.location.reload();
        } catch (error) {
            console.error('Error adding movie:', error);
        }
    };

    const handleCancelAddMovie = () => {
        setShowAddMovie(false);
        setNewMovie({
            name: '',
            year: '',
            grade: '',
            genre: '',
            user: ''
        });
    };

    const handleDeleteMovie = async () => {
        if (!selectedMovie) {
            console.error('No movie selected for deletion');
            return;
        }

        try {
            const response = await fetch(`http://localhost:3000/movies/${selectedMovie.idMovie}`, {
                method: 'DELETE'
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            setMovies((prevMovies) => prevMovies.filter(movie => movie.idMovie !== selectedMovie.idMovie));
            setSelectedMovie(null);
        } catch (error) {
            console.error('Error deleting movie:', error);
        }
    };

    const handleEditMovieClick = (movie) => {
        setIsEditing(true);
        setEditableMovie(movie);
    };

    const handleUpdateMovie = async () => {
        const updates = [
            { 
                element: 'movie_name', 
                value: editableMovie.movie_name 
            },
            { 
                element: 'movie_release_year', 
                value: editableMovie.movie_release_year 
            },
            { 
                element: 'movie_genre', 
                value: editableMovie.movie_genre 
            },
            { 
                element: 'user', 
                value: editableMovie.user 
            },
            { 
                element: 'movie_grade', 
                value: editableMovie.movie_grade 
            },
        ];

        try {
            for (let update of updates) {
                const response = await fetch(`http://localhost:3000/movies/${editableMovie.idMovie}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        element: update.element,
                        elementValue: update.value
                    })
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
            }

            setMovies((prevMovies) => prevMovies.map(movie => movie.idMovie === editableMovie.idMovie ? editableMovie : movie));
            setIsEditing(false);
            setEditableMovie(null);
            setSelectedMovie(editableMovie);
        } catch (error) {
            console.error('Error updating movie:', error);
        }
    };

    const handleCancelUpdateMovie = () => {
        setIsEditing(false);
        setEditableMovie(null);
    };

    const routeChangeToBooks = () => navigate("/books");
    const routeChangeToShows = () => navigate("/shows");

    return (
        <div id="mainPageMovies">
            <header>
                <div id="headerMovie">
                    <div id="headerMainMoviesTitle">
                        <font size="50">Movie Knight</font>
                    </div>
                    <nav id="navMoviesBooksShows">
                        <div id="currentPageNavCont" className="NavButtons">
                            <a id="currentPageNav" className="NavButtonsBut">Movies</a>
                        </div>
                        <div className="NavButtons">
                            <span onClick={routeChangeToShows} className="NavButtonsBut">Shows</span>
                        </div>
                        <div className="NavButtons">
                            <a onClick={routeChangeToBooks} className="NavButtonsBut">Books</a>
                        </div>
                    </nav>
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
                                <li onClick={handleAddMovieClick}>
                                    <font id="plusButton" size="6">
                                        <b>+</b>
                                    </font>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div id="movieInfoCont">
                        {!showAddMovie && selectedMovie && !isEditing && (
                            <div id="moviesInfo">
                                <font size="8">{selectedMovie.movie_name}</font>
                                <h2 className="infoMovies">Release Year: {selectedMovie.movie_release_year}</h2>
                                <h2 className="infoMovies">Genre: {selectedMovie.movie_genre}</h2>
                                <h2 className="infoMovies">Grade: {selectedMovie.movie_grade}</h2>
                                <div id="buttons">
                                    <button id="deleteButton" onClick={handleDeleteMovie}>Delete</button>
                                    <button id="updateButton" onClick={() => handleEditMovieClick(selectedMovie)}>Update</button>
                                </div>
                            </div>
                        )}

                        {showAddMovie && (
                            <div id="addMovieForm">
                                <div className="kontInput">
                                    <div className="inputAdding">
                                        <label htmlFor="name">Name</label>
                                        <input
                                            type="text"
                                            value={newMovie.name}
                                            onChange={(e) => setNewMovie({ ...newMovie, name: e.target.value })}
                                            placeholder="Movie Name"
                                            name="name"
                                        />
                                    </div>
                                    <div className="inputAdding">
                                        <label htmlFor="year">Year</label>
                                        <input
                                            type="text"
                                            value={newMovie.year}
                                            onChange={(e) => setNewMovie({ ...newMovie, year: e.target.value })}
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
                                            value={newMovie.genre}
                                            onChange={(e) => setNewMovie({ ...newMovie, genre: e.target.value })}
                                            placeholder="Genre"
                                            name="genre"
                                        />
                                    </div>
                                    <div className="inputAdding">
                                        <label htmlFor="users">User</label>
                                        <input
                                            type="text"
                                            value={newMovie.user}
                                            onChange={(e) => setNewMovie({ ...newMovie, user: e.target.value })}
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
                                            value={newMovie.grade}
                                            onChange={(e) => setNewMovie({ ...newMovie, grade: e.target.value })}
                                            placeholder="Grade"
                                            name="grade"
                                        />
                                    </div>
                                </div>
                                <div className="kontInput">
                                    <button id="buttonAdd" onClick={handleAddMovie}>Save</button>
                                    <button id="buttonCancel" onClick={handleCancelAddMovie}>Cancel</button>
                                </div>
                            </div>
                        )}

                        {isEditing && editableMovie && (
                            <div id="updateMovieForm">
                                <div className="kontInput">
                                    <div className="inputAdding">
                                        <label htmlFor="name">Name</label>
                                        <input
                                            type="text"
                                            value={editableMovie.movie_name}
                                            onChange={(e) => setEditableMovie({ ...editableMovie, movie_name: e.target.value })}
                                            placeholder="Movie Name"
                                            name="name"
                                        />
                                    </div>
                                    <div className="inputAdding">
                                        <label htmlFor="year">Year</label>
                                        <input
                                            type="text"
                                            value={editableMovie.movie_release_year}
                                            onChange={(e) => setEditableMovie({ ...editableMovie, movie_release_year: e.target.value })}
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
                                            value={editableMovie.movie_genre}
                                            onChange={(e) => setEditableMovie({ ...editableMovie, movie_genre: e.target.value })}
                                            placeholder="Genre"
                                            name="genre"
                                        />
                                    </div>
                                    <div className="inputAdding">
                                        <label htmlFor="users">User</label>
                                        <input
                                            type="text"
                                            value={editableMovie.user}
                                            onChange={(e) => setEditableMovie({ ...editableMovie, user: e.target.value })}
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
                                            value={editableMovie.movie_grade}
                                            onChange={(e) => setEditableMovie({ ...editableMovie, movie_grade: e.target.value })}
                                            placeholder="Grade"
                                            name="grade"
                                        />
                                    </div>
                                </div>
                                <div className="kontInput">
                                    <button id="buttonUpdate" onClick={handleUpdateMovie}>Save</button>
                                    <button id="buttonCancel" onClick={handleCancelUpdateMovie}>Cancel</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>

            <footer>
                <div id="footerMainMov">
                    <p id="logoFooterMainMovies">&copy; 2024 Marin Grabovac</p>
                </div>
            </footer>
        </div>
    );
}

export default MainMovies;
