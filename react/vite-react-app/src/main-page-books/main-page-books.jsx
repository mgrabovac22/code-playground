import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './main-page-books.css';

function MainBooks() {
    const [books, setBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null);
    const [showAddBook, setShowAddBook] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editableBook, setEditableBook] = useState(null);
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

    const handleDeleteBook = async () => {
        if (!selectedBook) {
            console.error('No book selected for deletion');
            return;
        }

        try {
            const response = await fetch(`http://localhost:3000/books/${selectedBook.idBook}`, {
                method: 'DELETE'
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            setBooks((prevBooks) => prevBooks.filter(book => book.idBook !== selectedBook.idBook));
            setSelectedBook(null);
        } catch (error) {
            console.error('Error deleting book:', error);
        }
    };

    const handleEditBookClick = (book) => {
        setIsEditing(true);
        setEditableBook(book);
    };

    const handleUpdateBook = async () => {
        const updates = [
            { 
                element: 'book_name', 
                value: editableBook.book_name 
            },
            { 
                element: 'book_release_year', 
                value: editableBook.book_release_year 
            },
            { 
                element: 'genre_book', 
                value: editableBook.genre_book 
            },
            { 
                element: 'author_name', 
                value: editableBook.author_name 
            },
            { 
                element: 'users', 
                value: editableBook.users 
            },
            { 
                element: 'grade', 
                value: editableBook.grade 
            },
        ];

        try {
            for (let update of updates) {
                const response = await fetch(`http://localhost:3000/books/${editableBook.idBook}`, {
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

            setBooks((prevBooks) => prevBooks.map(book => book.idBook === editableBook.idBook ? editableBook : book));
            setIsEditing(false);
            setEditableBook(null);
            setSelectedBook(editableBook);
        } catch (error) {
            console.error('Error updating book:', error);
        }
    };

    const handleCancelUpdateBook = () => {
        setIsEditing(false);
        setEditableBook(null);
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
                        {!showAddBook && selectedBook && !isEditing && (
                            <div id="booksInfo">
                                <font size="8">{selectedBook.book_name}</font>
                                <h2 className="infoBooks">Release Year: {selectedBook.book_release_year}</h2>
                                <h2 className="infoBooks">Genre: {selectedBook.genre_book}</h2>
                                <h2 className="infoBooks">Author: {selectedBook.author_name}</h2>
                                <h2 className="infoBooks">Grade: {selectedBook.grade}</h2>
                                <div id="buttons">
                                    <button id="deleteButton" onClick={handleDeleteBook}>Delete</button>
                                    <button id="updateButton" onClick={() => handleEditBookClick(selectedBook)}>Update</button>
                                </div>
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

                        {isEditing && editableBook && (
                            <div id="updateBookForm">
                                <div className="kontInput">
                                    <div className="inputAdding">
                                        <label htmlFor="name">Name</label>
                                        <input
                                            type="text"
                                            value={editableBook.book_name}
                                            onChange={(e) => setEditableBook({ ...editableBook, book_name: e.target.value })}
                                            placeholder="Book Name"
                                            name="name"
                                        />
                                    </div>
                                    <div className="inputAdding">   
                                        <label htmlFor="year">Year</label>
                                        <input
                                            type="text"
                                            value={editableBook.book_release_year}
                                            onChange={(e) => setEditableBook({ ...editableBook, book_release_year: e.target.value })}
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
                                            value={editableBook.genre_book}
                                            onChange={(e) => setEditableBook({ ...editableBook, genre_book: e.target.value })}
                                            placeholder="Genre"
                                            name="genre"
                                        />
                                    </div>
                                    <div className="inputAdding">  
                                        <label htmlFor="author">Author</label>
                                        <input
                                            type="text"
                                            value={editableBook.author_name}
                                            onChange={(e) => setEditableBook({ ...editableBook, author_name: e.target.value })}
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
                                            value={editableBook.users}
                                            onChange={(e) => setEditableBook({ ...editableBook, users: e.target.value })}
                                            placeholder="Users"
                                            name="users"
                                        />
                                    </div>
                                    <div className="inputAdding">  
                                        <label htmlFor="grade">Grade</label>
                                        <input
                                            type="text"
                                            value={editableBook.grade}
                                            onChange={(e) => setEditableBook({ ...editableBook, grade: e.target.value })}
                                            placeholder="Grade"
                                            name="grade"
                                        />
                                    </div>
                                </div>
                                <div className="kontInput">
                                    <button id="buttonUpdate" onClick={handleUpdateBook}>Save</button>
                                    <button id="buttonCancel" onClick={handleCancelUpdateBook}>Cancel</button>
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
