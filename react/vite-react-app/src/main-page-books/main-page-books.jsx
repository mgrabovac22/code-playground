import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './main-page-books.css';

function MainBooks(){

    const [books, setBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null);
    const [author, setAuthor] = useState([]);
    const [showAddBook, setShowAddBook] = useState(false);
    const [newBook, setNewBook] = useState({
        book_name: '',
        book_release_year: '',
        genre_book: '',
        // Add other properties for author, grade, etc.
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

    useEffect(() => {
        const fetchAuthors = async () => {
            try {
                if (!selectedBook) return;
                const response = await fetch(`http://localhost:3000/authors/${selectedBook.author_name}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setAuthor(data);
            } catch (error) {
                console.error('Error fetching author:', error);
            }
        };
    
        fetchAuthors();
    }, [selectedBook]);

    const handleClick = (book) => {
        setSelectedBook(prevSelectedBook => {
            // If the same book is clicked again, deselect it
            if (prevSelectedBook === book) {
                return null;
            } else {
                return book;
            }
        });
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

            // Clear the input fields and hide the add book section
            setNewBook({
                book_name: '',
                book_release_year: '',
                genre_book: '',
                // Add other properties for author, grade, etc.
            });
            setShowAddBook(false);
        } catch (error) {
            console.error('Error adding book:', error);
        }
    };

    const routeChangeToMovies = () => {
        let path = "/movies";
        navigate(path);
    };

    const routeChangeToShows = () => {
        let path = "/shows";
        navigate(path);
    };

    return (
        <div id="mainPageBooks">
            <header>
                <div id="headerBook">
                    <div id="headerMainBooksTitle">
                        <font size="50">Movie Knight</font>
                    </div>

                    <div id="navMoviesBooksShows">
                        <div className="NavButtons">
                            <a onClick={() => routeChangeToMovies()} className="NavButtonsBut">Movies</a>
                        </div>
                        <div className="NavButtons">
                            <span onClick={() => routeChangeToShows()} className="NavButtonsBut">Shows</span>
                        </div>
                        <div id="currentPageNavCont" className="NavButtons">
                            <a id="currentPageNav" className="NavButtonsBut">Books</a>
                        </div>
                    </div>
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
                                <li>
                                    <font id="plusButton" size="6"><b onClick={handleAddBookClick}>+</b></font>
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
                                {author.length > 0 && <h2 className="infoBooks">Author: {author[0].author_name}</h2>}
                                <h2 className="infoBooks">Grade: {selectedBook.grade}</h2>
                            </div>                        
                        )}

                        {showAddBook && (
                            <div>
                                <input
                                    type="text"
                                    value={newBook.book_name}
                                    onChange={(e) => setNewBook({ ...newBook, book_name: e.target.value })}
                                    placeholder="Book Name"
                                />
                                <input
                                    type="text"
                                    value={newBook.book_release_year}
                                    onChange={(e) => setNewBook({ ...newBook, book_release_year: e.target.value })}
                                    placeholder="Release Year"
                                />
                                <input
                                    type="text"
                                    value={newBook.genre_book}
                                    onChange={(e) => setNewBook({ ...newBook, genre_book: e.target.value })}
                                    placeholder="Genre"
                                />
                                {/* Add input fields for author, grade, etc. */}
                                <button onClick={handleAddBook}>Save</button>
                            </div>
                        )}
                    </div>
                </div>
            </main>

            <footer>
                <div id="footerMainMov">
                    <p id="logoFooterMainBooks"> &copy; 2024 Marin Grabovac</p>
                </div>
            </footer>
        </div>
    );
}

export default MainBooks;
