import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './main-page-books.css';

function MainBooks(){

    const [books, setBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null);
    const [author, setAuthor] = useState(null);
    const [showAddBook, setShowAddBook] = useState(false);
    const [newBook, setNewBook] = useState({
        name: '',
        genre: '',
        year: '',
        author: '',
        users: '',
        grade: ''
    });

    const navigate = useNavigate();
    
    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch("http://localhost:3000/books");
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setBooks(data);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };

        fetchBooks();
    }, []);

    const handleClick = (book) => {
        setSelectedBook(prevSelectedBook => prevSelectedBook === book ? null : book);
    };

    const handleAddBookClick = () => {
        setShowAddBook(true);
    };

    const handleAddBook = async () => {
        try {
            const response = await fetch("http://localhost:3000/books", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newBook)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const addedBook = await response.json();

            setBooks([...books, addedBook]);
            setNewBook({
                name: '',
                genre: '',
                year: '',
                author: '',
                users: '',
                grade: ''
            });
            setShowAddBook(false);
            window.location.reload();
        } catch (error) {
            console.error('Error adding book:', error);
        }
    };

    const handleCancelAddBook = () => {
        setShowAddBook(false);
        setNewBook({
            name: '',
            genre: '',
            year: '',
            author: '',
            users: '',
            grade: ''
        });
    };

    const routeChangeToMovies = () => navigate("/movies");
    const routeChangeToShows = () => navigate("/shows");

    return (
        <div id="mainPageBooks">
            <header>
                <div id="headerBook">
                    <div id="headerMainBooksTitle">
                        <font size="50">Movie Knight</font>
                    </div>
                    <nav id="navMoviesBooksShows">
                        <div className="NavButtons">
                            <a onClick={routeChangeToMovies} className="NavButtonsBut">Movies</a>
                        </div>
                        <div className="NavButtons">
                            <span onClick={routeChangeToShows} className="NavButtonsBut">Shows</span>
                        </div>
                        <div id="currentPageNavCont" className="NavButtons">
                            <a id="currentPageNav" className="NavButtonsBut">Books</a>
                        </div>
                    </nav>
                </div>
            </header>

            <main>
                <div id="mainContBooks">
                    <div id="listBooksClickCont">
                        <div id="listBooksClick">
                            <ul>
                                {books.map((book, index) => (
                                    <li key={index} onClick={() => handleClick(book)}>
                                        <font size="5">{book.book_name}</font>
                                    </li>
                                ))}
                                <li onClick={handleAddBookClick}>
                                    <font id="plusButton" size="6">
                                        <b>+</b>
                                    </font>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div id="bookInfoCont">
                        {!showAddBook && selectedBook && (
                            <div id="booksInfo">
                                <font size="8">{selectedBook.book_name}</font>
                                <h2 className="infoBooks">Release Year: {selectedBook.book_release_year}</h2>
                                <h2 className="infoBooks">Genre: {selectedBook.genre_book}</h2>
                                <h2 className="infoBooks">Author: {selectedBook.author_name}</h2>
                                <h2 className="infoBooks">Grade: {selectedBook.grade}</h2>
                            </div>
                        )}

                        {showAddBook && (
                            <div id="addBookForm">
                                <div className="kontInput">
                                    <div className="inputAdding">
                                        <label htmlFor="name">Name</label>
                                        <input
                                            type="text"
                                            value={newBook.name}
                                            onChange={(e) => setNewBook({ ...newBook, name: e.target.value })}
                                            placeholder="Book Name"
                                            name="name"
                                        />
                                    </div>
                                    <div className="inputAdding">   
                                        <label htmlFor="year">Year</label>
                                        <input
                                            type="text"
                                            value={newBook.year}
                                            onChange={(e) => setNewBook({ ...newBook, year: e.target.value })}
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
                                            value={newBook.genre}
                                            onChange={(e) => setNewBook({ ...newBook, genre: e.target.value })}
                                            placeholder="Genre"
                                            name="genre"
                                        />
                                    </div>
                                    <div className="inputAdding">  
                                        <label htmlFor="author">Author</label>
                                        <input
                                            type="text"
                                            value={newBook.author}
                                            onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
                                            placeholder="Author"
                                            name="author"
                                        />
                                    </div>
                                </div>
                                <div className="kontInput">
                                    <div className="inputAdding">
                                        <label htmlFor="users">Users</label>
                                        <input
                                            type="text"
                                            value={newBook.users}
                                            onChange={(e) => setNewBook({ ...newBook, users: e.target.value })}
                                            placeholder="Users"
                                            name="users"
                                        />
                                    </div>
                                    <div className="inputAdding">  
                                        <label htmlFor="grade">Grade</label>
                                        <input
                                            type="text"
                                            value={newBook.grade}
                                            onChange={(e) => setNewBook({ ...newBook, grade: e.target.value })}
                                            placeholder="Grade"
                                            name="grade"
                                        />
                                    </div>
                                </div>
                                <div className="kontInput">
                                    <button id="buttonAdd" onClick={handleAddBook}>Save</button>
                                    <button id="buttonCancel" onClick={handleCancelAddBook}>Cancel</button>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </main>

            <footer>
                <div id="footerMainMov">
                    <p id="logoFooterMainBooks">&copy; 2024 Marin Grabovac</p>
                </div>
            </footer>
        </div>
    );
}

export default MainBooks;
