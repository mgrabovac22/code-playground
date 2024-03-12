import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './main-page-books.css';

function MainBooks(){

    const [books, setbooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null);
    const [author, setAuthor] = useState([]);

    const navigate = useNavigate();
    
    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch("http://localhost:3000/books");
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setbooks(data);
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
        setSelectedBook(book);
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
                            </ul>
                        </div>
                    </div>

                    <div id="bookInfoCont">
                        {selectedBook && (
                            <div id="booksInfo">
                                <font size="8" >{selectedBook.book_name}</font>
                                <h2 className="infoBooks">Release Year: {selectedBook.book_release_year}</h2>
                                <h2 className="infoBooks">Genre: {selectedBook.genre_book}</h2>
                                {author.length > 0 && <h2 className="infoBooks">Author: {author[0].author_name}</h2>}
                                <h2 className="infoBooks">Grade: {selectedBook.grade}</h2>
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
