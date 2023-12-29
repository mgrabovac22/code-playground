import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Default from './default-page/Default';
import Login from './login-page/login';
import Register from './register-page/register';
import MainMovies from './main-page-movies/main-page-movies';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Default />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/movies" element={<MainMovies/>} />
      </Routes>
    </Router>
  );
}

export default App;
